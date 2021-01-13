import { Action, createReducer, on } from '@ngrx/store';
import * as PeliculasActions from '../actions/peliculas.actions';

export const peliculasFeatureKey = 'peliculas';

export interface State {
  Peliculas: any;
  PeliculaSeleccionada: any;
}

export const initialState: State = {
  Peliculas: null,
  PeliculaSeleccionada: null,
};

const peliculasReducer = createReducer(
  initialState,

  on(PeliculasActions.loadPeliculass, state => state),
  on(PeliculasActions.CargarPeliculas, (state, action) => ({
    ...state, Peliculas: state.Peliculas = action
  })),
  on(PeliculasActions.SeleccionarPelicula, (state, action) => ({
    ...state, PeliculaSeleccionada: state.PeliculaSeleccionada = action
  }))

);

export function reducer(state: State | undefined, action: Action) {
  return peliculasReducer(state, action);
}
