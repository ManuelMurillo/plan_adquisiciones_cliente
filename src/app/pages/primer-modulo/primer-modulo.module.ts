import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimerModuloRoutingModule } from './primer-modulo-routing.module';
import { ComponentePruebaComponent } from './componentes/componente-prueba/componente-prueba.component';
import { LayoutComponent } from './componentes/layout/layout.component';


@NgModule({
  declarations: [
    ComponentePruebaComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PrimerModuloRoutingModule
  ]
})
export class PrimerModuloModule { }
