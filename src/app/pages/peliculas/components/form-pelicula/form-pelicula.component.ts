import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ClasificacionesService } from '../../../../shared/services/peliculas.service';
import { ActualizarPelicula, CrearPelicula } from '../../actions/peliculas.actions';
import { getPeliculaSeleccionada } from '../../selectors/peliculas.selectors';
// import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'ngx-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.scss']
})
export class FormPeliculaComponent implements OnInit {
  PeliculaForm: any;
  Clasificaciones: any;

  constructor(
    private fb: FormBuilder,
    private clasificacionesService: ClasificacionesService,
    // private peliculaService: PeliculasService,
    private store: Store<any>,
  ) { }

  ngOnInit() {

    this.store.select(getPeliculaSeleccionada).subscribe((pelicula: any) => {
      if (pelicula) {
        this.CrearFormulario(pelicula);
      }
    });
    this.clasificacionesService.getClasificaciones().subscribe((data: any) => {
      this.Clasificaciones = data;
      this.CrearFormulario();
    });
  }

  CrearFormulario(data?: any) {
    if (data) {
      this.PeliculaForm = this.fb.group({
        id: [data.id, []],
        nombre: [data.nombre, []],
        director: [data.director, []],
        clasificacion: [this.Clasificaciones.find((element: any) => element.id === data.clasificacion.id), []],
      });
    } else {
      this.PeliculaForm = this.fb.group({
        id: [null, []],
        nombre: [null, []],
        director: [null, []],
        clasificacion: [null, []],
      });
    }
  }

  OnSubmit() {
    if (this.PeliculaForm.value.id === null) {
      this.store.dispatch(CrearPelicula(this.PeliculaForm.value));
    } else {
      this.store.dispatch(ActualizarPelicula(this.PeliculaForm.value));
    }
  }

}
