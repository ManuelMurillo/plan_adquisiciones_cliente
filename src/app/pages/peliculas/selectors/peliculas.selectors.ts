import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeliculas from '../reducers/peliculas.reducer';

export const selectPeliculasState = createFeatureSelector<fromPeliculas.State>(
  fromPeliculas.peliculasFeatureKey
);

export const getPeliculas = createSelector(
  selectPeliculasState,
  (state: fromPeliculas.State) => state.Peliculas,
);

export const getPeliculaSeleccionada = createSelector(
  selectPeliculasState,
  (state: fromPeliculas.State) => state.PeliculaSeleccionada,
);
