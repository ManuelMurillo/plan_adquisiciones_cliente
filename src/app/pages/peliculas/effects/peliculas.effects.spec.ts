import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PeliculasEffects } from './peliculas.effects';

describe('PeliculasEffects', () => {
  // let actions$: Observable<any>;
  const actions$: Observable<any> = new Observable;
  let effects: PeliculasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeliculasEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PeliculasEffects>(PeliculasEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
