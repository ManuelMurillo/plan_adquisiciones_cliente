import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() Pelicula: any;

  constructor() { }

  ngOnInit() {
  }

}
