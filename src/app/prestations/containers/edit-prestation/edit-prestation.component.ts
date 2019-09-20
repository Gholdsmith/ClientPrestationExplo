import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  @Input() item: Prestation;

  constructor(
    private prestationsService: PrestationsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submited(item: Prestation) {
    console.log(item);
    item.id = this.item.id;
    this.prestationsService.update(item).then(() => {
      this.router.navigate(['prestations']);
    });

  }

}
