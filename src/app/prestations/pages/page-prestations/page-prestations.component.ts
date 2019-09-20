import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public title: string;
  public intitule: string;
  public txt: string;
  public id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      // console.log(data);

      this.title = data.title;
      this.txt = data.txt;
      this.intitule = data.intitule;

    });
  }


}
