import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'peliculas',
      loadChildren: () => import('./peliculas/peliculas.module')
      .then(m => m.PeliculasModule),
    },
    {
      path: '',
      redirectTo: 'prueba',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'prueba',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
