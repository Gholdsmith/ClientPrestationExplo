import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { State } from 'src/shared/enums/state.enum';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  // le décoratuer @Input rend la variable item accessible depuis le composant parent
  @Input() item: Prestation;
  @Output() nItem: EventEmitter<{item: Prestation, 'state': State}> = new EventEmitter();

  // permet de transformer l'enum en tableau avec les valeurs de cet enum
  // public states = Object.values(State); //if < Angular 6
  public states = State;

  constructor() {
    // console.log(this.item); // undefined

  }

  ngOnInit() {
    // console.log(this.item); // initialisé
  }


  changeState(event) {
   // console.log(event.target.value);
    this.nItem.emit(
      {
        item: this.item,
        state: event.target.value
      });
  }

}
