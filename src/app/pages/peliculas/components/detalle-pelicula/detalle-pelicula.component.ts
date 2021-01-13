import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeleccionarPelicula } from '../../actions/peliculas.actions';

@Component({
  selector: 'ngx-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() Pelicula: any;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  EnviarPelicula() {
    this.store.dispatch(SeleccionarPelicula(this.Pelicula));
  }

}
