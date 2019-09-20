import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/shared/enums/state.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prestation } from 'src/shared/models/prestation.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  public states = State;
  public form: FormGroup;
  @Input() init = new Prestation();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateForm();
  }

  private generateForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      // rends le champ obligatoire et de taille 3
      client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state],
      comment: [this.init.comment],
    });
  }

  public onSubmit() {
    console.warn(this.form.value);
    this.nItem.emit(this.form.value);
  }



}
