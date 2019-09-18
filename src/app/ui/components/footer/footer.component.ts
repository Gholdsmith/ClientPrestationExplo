import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version: number;

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {

    this.prestationsService.version$.subscribe((data) => {
      this.version = data;
    });
  }

}
