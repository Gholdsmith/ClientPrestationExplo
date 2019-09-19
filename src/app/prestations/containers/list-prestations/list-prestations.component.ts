import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/shared/models/prestation.model';
import { State } from 'src/shared/enums/state.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  public collection: Prestation[];
  public headers: string[];
  private sub: Subscription;

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    // this.collection = this.prestationsService.collection;
    // console.log(this.prestationsService.collection);
    this.sub = this.prestationsService.collection.subscribe((data) => {
      this.collection = data;
    });

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

  changeState(obj: {'item': Prestation, 'state': State}){
    // console.log(obj);
    this.prestationsService.update(obj.item, obj.state);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
