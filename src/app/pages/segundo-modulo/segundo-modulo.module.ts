import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoModuloRoutingModule } from './segundo-modulo-routing.module';
import { LayoutComponent } from './componentes/layout/layout.component';
import { ComponentePruebaDosComponent } from './componentes/componente-prueba-dos/componente-prueba-dos.component';


@NgModule({
  declarations: [LayoutComponent, ComponentePruebaDosComponent],
  imports: [
    CommonModule,
    SegundoModuloRoutingModule
  ]
})
export class SegundoModuloModule { }
