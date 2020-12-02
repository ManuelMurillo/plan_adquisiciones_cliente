import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'ngx-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  Peliculas: any;

  constructor(
    private peliculasService: PeliculasService,
  ) { }

  ngOnInit() {
    this.peliculasService.getPeliculas().subscribe((data: any) => {
      this.Peliculas = data;
    });
  }

}
