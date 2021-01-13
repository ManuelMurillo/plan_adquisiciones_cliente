import { createAction, props } from '@ngrx/store';

export const loadPeliculass = createAction(
  '[Peliculas] Load Peliculass'
);

export const CargarPeliculas = createAction(
  '[Peliculas] Cargar Peliculas',
  props(),
);

export const GetPeliculas = createAction(
  '[Peliculas] Get Peliculas',
  props(),
);

export const CrearPelicula = createAction(
  '[Peliculas] Crear Pelicula',
  props(),
);

export const ActualizarPelicula = createAction(
  '[Peliculas] Actualizar Pelicula',
  props(),
);


export const SeleccionarPelicula = createAction(
  '[Peliculas] Seleccionar Pelicula',
  props(),
);





