import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';


const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
];

@NgModule({
  // declarations: [], la déclaration n'a pas d'utilité ici
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class LoginRoutingModule { }
