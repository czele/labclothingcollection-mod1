import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../Interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
 
  url: string = 'http://localhost:3000/modelos';
  
  constructor(private _modeloService: HttpClient) { }

  listar(): Observable<Modelo[]> {
    return this._modeloService.get<Modelo[]>(`${this.url}`);
  }

  cadastrar(modelo: Modelo): Observable<Modelo> {
    return this._modeloService.post<Modelo>(`${this.url}`, modelo)
  } 

  listarUm(id: number): Observable<any> {
    return this._modeloService.get<Modelo>(`${this.url}/${id}`)
  }

  excluir(id: number): Observable<any> {
    return this._modeloService.delete<any>(`${this.url}/${id}`)
  }

}
