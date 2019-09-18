import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/shared/enums/state.enum';
import { Prestation } from 'src/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  public version$ = new BehaviorSubject(1);

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
set collection(col: Prestation[]) {
  this.pCollection = col;
}

  // add item collection

  // update item in collection
public update(item: Prestation, state: State) {
  // console.log(item);
  item.state = state;
  // console.log(item);
}
  // set item by from collection

}
