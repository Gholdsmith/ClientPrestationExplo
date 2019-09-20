import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/shared/models/client.model';
import { StateClient } from 'src/shared/enums/state-client.enum';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  // le décoratuer @Input rend la variable item accessible depuis le composant parent
  @Input() item: Client;
  @Output() nItem: EventEmitter<{item: Client, 'state': StateClient}> = new EventEmitter();

  public states = StateClient;

  constructor() { }

  ngOnInit() {
  }

  changeState(event) {
     console.log(event.target.value);
     this.nItem.emit(
       {
         item: this.item,
         state: event.target.value
       });
   }

}
