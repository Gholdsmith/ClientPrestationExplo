import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/shared/enums/state.enum';
import { Prestation } from 'src/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  public version$ = new BehaviorSubject(1);
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  // propriete private collection
  private pCollection: Observable<Prestation[]>;



  constructor(private afs: AngularFirestore) {
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
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // add item collection
  public add(item: Prestation) {
    // this.collection.push(new Prestation(item));
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    // console.log(item);
    item.state = state;
    // console.log(item);
  }
  // set item by from collection

}
