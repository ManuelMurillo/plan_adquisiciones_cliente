import * as fromPeliculas from '../reducers/peliculas.reducer';
import { selectPeliculasState } from './peliculas.selectors';

describe('Peliculas Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPeliculasState({
      [fromPeliculas.peliculasFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
