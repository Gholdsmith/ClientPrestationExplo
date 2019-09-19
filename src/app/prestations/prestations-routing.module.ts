import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', txt: 'Toutes les prestations', intitule: 'prestation' }
   },
  { path: 'add', component: PageAddPrestationComponent}
];

@NgModule({
  // declarations: [], la déclaration n'a pas d'utilité ici
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
