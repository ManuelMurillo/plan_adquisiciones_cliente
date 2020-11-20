import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TablaPlanesAdquisicionesComponent } from './components/tabla-planes-adquisiciones/tabla-planes-adquisiciones.component';
import { CrearPlanAdquisicionComponent } from './components/crear-plan-adquisicion/crear-plan-adquisicion.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromPlanes from './reducers/planes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanesEffects } from './effects/planes.effects';


@NgModule({
  declarations: [LayoutComponent, TablaPlanesAdquisicionesComponent, CrearPlanAdquisicionComponent],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPlanes.planesFeatureKey, fromPlanes.reducer),
    EffectsModule.forFeature([PlanesEffects]),
  ]
})
export class PlanesModule { }