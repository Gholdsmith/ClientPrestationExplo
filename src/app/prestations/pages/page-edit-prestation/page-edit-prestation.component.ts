import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/shared/models/prestation.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  item: Prestation;
  item$: Observable<Prestation>;
  constructor(
    private route: ActivatedRoute,
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((data) => {
    //   console.log(data.get('id'));
    //   const id = data.get('id');
    //   this.item$ = this.prestationsService.getPrestation(id);
    //   // this.prestationsService.getPrestation(id).subscribe((presta) => {
    //   //   this.item = presta;
    //   // });
    // });

    // équivalent à la fonction ci dessus
    this.item$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.prestationsService.getPrestation(params.get('id'));
      })
    );
  }

}
