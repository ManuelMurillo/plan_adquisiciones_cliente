import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as PeliculasActions from '../actions/peliculas.actions';
import { PeliculasService } from '../services/peliculas.service';
// import { Store } from '@ngrx/store';
// import { CargarPeliculas } from '../actions/peliculas.actions';


@Injectable()
export class PeliculasEffects {

  constructor(
    private actions$: Actions,
    private peliculasService: PeliculasService,
    // private store: Store<any>
  ) { }


  loadPeliculass$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PeliculasActions.loadPeliculass),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });

  GetPeliculas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PeliculasActions.GetPeliculas),
      mergeMap(() =>
        this.peliculasService.getPeliculas().pipe(
          map((data: any) => {
            return PeliculasActions.CargarPeliculas([data]);
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  CrearPeliculas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PeliculasActions.CrearPelicula),
      mergeMap((data) =>
        this.peliculasService.postPelicula(data).pipe(
          map(() => {
            return PeliculasActions.GetPeliculas({});
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  ActualizarPeliculas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PeliculasActions.ActualizarPelicula),
      mergeMap((data: any) =>
        this.peliculasService.putPelicula(data.id, data).pipe(
          map(() => {
            return PeliculasActions.GetPeliculas({});
          }),
          catchError(() => EMPTY )
        )
      )
    );
  });




}
