import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getAccionTabla, getArbolRubro, getFilaSeleccionada } from '../../../../shared/selectors/shared.selectors';
import { ParametricService } from '../../../../shared/services/parametric.service';
import { LoadFuenteRecursoSeleccionada, LoadLineamientoSeleccionado } from '../../actions/lineamientos.actions';
import { CONFIGURACION_PRUEBA, DATOS_PRUEBA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-lineamientos',
  templateUrl: './table-lineamientos.component.html',
  styleUrls: ['./table-lineamientos.component.scss']
})
export class TableLineamientosComponent implements OnInit {

  configuracion: any;
  datosPrueba: any;
  fuentesRecurso: any;

  subscription$: any;
  LineamientoForm: FormGroup;
  subscription2$: any;
  subscription3$: any;

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private parametrics: ParametricService,
    private route: Router,
  ) {
    this.datosPrueba = DATOS_PRUEBA;
    this.configuracion = CONFIGURACION_PRUEBA;
    this.LineamientoForm = this.fb.group({
      FuenteSeleccionada: [null, [Validators.required]],
    });
    this.parametrics.CargarArbolRubros('3');
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getArbolRubro).pipe(
      map(data => {
        if (Object.keys(data).length !== 0) {
          return data[0].children;
        } else {
          return null;
        }
      }),
    ).subscribe((data: any) => {

      this.fuentesRecurso = data;
    });
    this.subscription2$ = this.store.select(getFilaSeleccionada).subscribe((fila: any) => {
      if (fila) {
        this.store.dispatch(LoadLineamientoSeleccionado(fila.fila));
        if (fila.accion.name === 'metas') {
          this.route.navigate(['pages/plan-adquisiciones/metas']);
        }
      }
    });
    this.subscription3$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      this.store.dispatch(LoadLineamientoSeleccionado(null));
    });
  }
  SeleccionarFuente(event: any) {
    this.store.dispatch(LoadFuenteRecursoSeleccionada(event));
  }
}