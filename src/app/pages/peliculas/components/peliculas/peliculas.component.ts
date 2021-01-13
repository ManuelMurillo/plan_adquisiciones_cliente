import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPeliculas } from '../../actions/peliculas.actions';
import { getPeliculas } from '../../selectors/peliculas.selectors';
// import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'ngx-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  Peliculas: any;

  constructor(
    // private peliculasService: PeliculasService,
    private store: Store<any>,
  ) {
    this.store.dispatch(GetPeliculas({}));
  }

  ngOnInit() {
    this.store.select(getPeliculas).subscribe((peliculas: any) => {
      if (peliculas) {
        this.Peliculas = peliculas[0];
      }
    });
  }

}
