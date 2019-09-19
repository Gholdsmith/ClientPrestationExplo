import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submited(item: Prestation){
    this.prestationService.add(item);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
