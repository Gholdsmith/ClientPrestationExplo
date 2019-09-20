import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageClientsComponent,
    data: { title: 'Clients', txt: 'Tous les clients', intitule: 'client' }
  },
  { path: 'add', component: PageAddClientComponent },

];

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
