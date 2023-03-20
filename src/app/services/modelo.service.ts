import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../Interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
 
  url: string = 'http://localhost:3000/';
  
  constructor(private _modeloService: HttpClient) { }

  listar(): Observable<Modelo[]> {
    return this._modeloService.get<Modelo[]>(`${this.url}colecoes`);
  }

}
