import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StateClient } from 'src/shared/enums/state-client.enum';
import { Client } from 'src/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public version$ = new BehaviorSubject(1);
  private itemsCollection: AngularFirestoreCollection<Client>;


  // propriete private collection
  private pCollection: Observable<Client[]>;

  constructor(private afs: AngularFirestore) {

    this.itemsCollection = afs.collection<Client>('clients');
    // on a acces à  'collection' grace aux getter déclaré plus bas angular l'appelle automatiquement pour renvoyer le collection
    // this.collection = fakeClients;

    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab =>  tab.map(obj =>  new Prestation(obj)))
      // la ligne du dessu est équivalente à la fonction ci dessous
      // c'est de l'es6
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );

  }


  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  // add item collection

  // update item in collection
  // public update(item: Client, state: StateClient) {
  //   // console.log(item);
  //   item.state = state;
  //   // console.log(item);
  // }


  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
    // *** équivalence HttpClient
    // return this.http.post(`${this.urlApi}collection`, item);

  }

  update(item: Client, state?: StateClient): Promise<any> {
    const client = { ...item };
    if (state) {
      client.state = state;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });

    // *** équivalence HttpClient
    // return this.http.patch(`${this.urlApi}collection`, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // *** équivalence HttpClient
    // return this.http.delete(`${this.urlApi}collection/${item.id}`);
    // *** penser à faire le subscribe
  }

  getPrestation(id: string): Observable<Client> {

    // renvoir un tableau json des éléments de la BD
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // *** équivalence HttpClient
    // return this.http.get(`${this.urlApi}collection/${item.id}`);
    // *** penser à faire le subscribe
  }

}
