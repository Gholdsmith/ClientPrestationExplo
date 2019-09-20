import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/shared/enums/state.enum';
import { Prestation } from 'src/shared/models/prestation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  public version$ = new BehaviorSubject(1);
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  // propriete private collection
  private pCollection: Observable<Prestation[]>;

  // on récupère la variblae d'environnement de l'url de dev
  private urlApi = environment.urlApi;

  constructor(private afs: AngularFirestore,
              private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');

    // !!! A revoir
    // on récupère un flux de données correspondant à un tableau de json
    // et on veut des objets  de type PRestation on utilise donc un pipe rxjs
    // avec la fonction map

    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab =>  tab.map(obj =>  new Prestation(obj)))
      // la ligne du dessu est équivalente à la fonction ci dessous
      // c'est de l'es6
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );

    // *** équivalence HttpClient
    // pour utiliser cette méthode il faut obsolument qu'il y ai un subscribe
    // return this.http.get(`${this.urlApi}collection`);
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addprestation', item);

    // *** équivalence HttpClient
    // return this.http.post(`${this.urlApi}collection`, item);

  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });

    // *** équivalence HttpClient
    // return this.http.patch(`${this.urlApi}collection`, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // *** équivalence HttpClient
    // return this.http.delete(`${this.urlApi}collection/${item.id}`);
    // *** penser à faire le subscribe
  }

  getPrestation(id: string): Observable<Prestation> {

    // renvoir un tableau json des éléments de la BD
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // *** équivalence HttpClient
    // return this.http.get(`${this.urlApi}collection/${item.id}`);
    // *** penser à faire le subscribe
  }
}
