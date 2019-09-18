import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None // pour retirer le shadowDOM
})
export class TableauComponent implements OnInit {
@Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
