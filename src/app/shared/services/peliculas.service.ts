import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpService: HttpClient) { }

  getClasificaciones() {
    return this.httpService.get('http://localhost:3000/clasificaciones');
  }
}
