import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
    // demande au router de charger le module prestation
    // Le module n'est chargé que si le user est passé sur /prestation
    // On ne peut dont pas mettre un path prestations à la suite de ce chargement
    // On va donc ajouter la route dans prestations.module
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(mod => mod.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-Not-Found/page-Not-Found.module').then(mod => mod.PageNotFoundModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules // précharge n tache de fond les module en lazyloading
      }
    )
    // other imports here
  ],
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // Permet de voir l'ensemble des appels à la création des routes
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }


}
