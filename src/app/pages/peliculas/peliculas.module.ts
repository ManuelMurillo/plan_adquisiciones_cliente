import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormPeliculaComponent } from './components/form-pelicula/form-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';


@NgModule({
  declarations: [FormPeliculaComponent, PeliculasComponent, DetallePeliculaComponent],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
