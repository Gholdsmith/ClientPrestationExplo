import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public version: number;
  // on peut aussi écrire public title = 'Nouhha'; // pas besion de type les objets
  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.title = 'Nouhaa\'s app';
    this.prestationsService.version$.subscribe((data) => {
      this.version = data;
    });
  }

  incrementeVersion() {
    this.prestationsService.version$.next(this.version + 1);
  }

}
