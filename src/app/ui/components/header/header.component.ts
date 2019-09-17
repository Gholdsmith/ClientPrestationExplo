import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;
  // on peut aussi écrire public title = 'Nouhha'; // pas besion de type les objets
  constructor() { }

  ngOnInit() {
    this.title = 'Nouhaa\'s app';
  }


}
