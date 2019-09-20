import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/shared/enums/state-client.enum';
import { Client } from 'src/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: string[];
  header: any;

  constructor(private clientService: ClientsService) {

    this.collection$ = this.clientService.collection;
    console.log(this.clientService.collection);

    this.headers = [
      'id',
      'nom',
      'mail',
      'state',
    ];
   }

  ngOnInit() {
  }

  changeState(obj: {'item': Client, 'state': StateClient}){
    // console.log(obj);
    this.clientService.update(obj.item, obj.state).then(() => {
      obj.item.state = obj.state;
    });
  }
}
