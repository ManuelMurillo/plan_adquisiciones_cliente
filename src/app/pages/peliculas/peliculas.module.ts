import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormPeliculaComponent } from './components/form-pelicula/form-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormPeliculaComponent,
    PeliculasComponent,
    DetallePeliculaComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
