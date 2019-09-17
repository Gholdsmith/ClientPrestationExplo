import { Injectable } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
// propriete private collection
private pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
get collection(): Prestation[]{
  return this.pCollection;
}

  // set collection
set collection(col: Prestation[]){
  this.pCollection = col;
}

  // add item collection

  // update item in collection

  // set item by from collection

}
