import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClasificacionesService } from '../../../../shared/services/peliculas.service';
import { PeliculasService } from '../../services/peliculas.service';

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
    private peliculaService: PeliculasService,
    ) { }

  ngOnInit() {
    this.clasificacionesService.getClasificaciones().subscribe((data: any) => {
      this.Clasificaciones = data;
      this.CrearFormulario();
    })
  }

  CrearFormulario(data?: any) {
    if (data ) {
      this.PeliculaForm = this.fb.group({
        id: [data.id,[]],
        nombre: [data.nombre,[]],
        director: [data.director,[]],
        clasificacion: [this.Clasificaciones.find((element: any) => element.id === data.clasificacion.id),[]],
      });
    } else {
      this.PeliculaForm = this.fb.group({
        id: [null,[]],
        nombre: [null,[]],
        director: [null,[]],
        clasificacion: [null,[]],
      });
    }
  }

  OnSubmit() {
    console.log(this.PeliculaForm.value);
    this.peliculaService.postPelicula(this.PeliculaForm.value).subscribe(() => {});
  }

}
