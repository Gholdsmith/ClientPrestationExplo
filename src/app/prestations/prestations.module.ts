import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { SharedModule } from 'src/shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { TemplatesModule } from '../template/templates.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';



@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PageAddPrestationComponent,
    AddPrestationComponent, FormPrestationComponent, PageEditPrestationComponent, EditPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
