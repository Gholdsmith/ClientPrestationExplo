import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection: Prestation[];
  public headers: string[];
  header: any;

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    console.log(this.prestationsService.collection);

    this.headers = [
      'type',
      'client',
      'nbJour',
      'tjm HT',
      'total HT',
      'total TTC',
      'state',
    ];
  }

}
