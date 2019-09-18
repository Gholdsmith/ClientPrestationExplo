import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StateClient } from 'src/shared/enums/state-client.enum';
import { Client } from 'src/shared/models/client.model';
import { fakeClients } from './fake-clients';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public version$ = new BehaviorSubject(1);

  // propriete private collection
  private pCollection: Client[];

  constructor() {

    // on a acces à  'collection' grace aux getter déclaré plus bas angular l'appelle automatiquement pour renvoyer le collection
    this.collection = fakeClients;
  }


  // get collection
  get collection(): Client[]{
    return this.pCollection;
  }

    // set collection
  set collection(col: Client[]) {
    this.pCollection = col;
  }

    // add item collection

    // update item in collection
  public update(item: Client, state: StateClient) {
    // console.log(item);
    item.state = state;
    // console.log(item);
  }


}
