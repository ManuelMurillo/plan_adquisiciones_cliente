import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpService: HttpClient) { }

  getPeliculas() {
    return this.httpService.get('http://localhost:3000/peliculas')
  }
  getPelicula(id: any) {
    return this.httpService.get('http://localhost:3000/peliculas/' + id)
  }
  postPelicula(id: any, data: any) {
    return this.httpService.post('http://localhost:3000/peliculas/' + id, data)
  }
  putPelicula(id: any, data: any) {
    return this.httpService.put('http://localhost:3000/peliculas/' + id, data)
  }
  
}
