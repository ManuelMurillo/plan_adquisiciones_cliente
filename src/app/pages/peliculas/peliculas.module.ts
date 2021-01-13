import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormPeliculaComponent } from './components/form-pelicula/form-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromPeliculas from './reducers/peliculas.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PeliculasEffects } from './effects/peliculas.effects';


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
    PeliculasRoutingModule,
    StoreModule.forFeature(fromPeliculas.peliculasFeatureKey, fromPeliculas.reducer),
    EffectsModule.forFeature([PeliculasEffects])
  ]
})
export class PeliculasModule { }
