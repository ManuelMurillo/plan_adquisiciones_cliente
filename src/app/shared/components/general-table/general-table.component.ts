import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAccionTabla, LoadFilaSeleccionada } from '../../actions/shared.actions';
import { CONFIGURACION_PRUEBA, DATOS_PRUEBA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {

  @Input() config: any;
  @Input() datos: any;
  @Output() selectedAction: EventEmitter<any>;
  stringBusqueda: string;
  datosPrueba: any[];

  constructor(
    private store: Store<any>,
  ) {
    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  SelectedAction(action: any, row: any) {

    this.store.dispatch(LoadFilaSeleccionada({
      titulo: this.config.title,
      accion: action,
      fila: row,
    }));
  }

  SelectedAllAction(action: any) {

    this.store.dispatch(LoadAccionTabla({
      titulo: this.config.title,
      accion: action,
    }));

  }

}