import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title = 'Prestations';
  public txt = 'Ajouter une prestation';
  constructor() { }

  ngOnInit() {
  }

}
