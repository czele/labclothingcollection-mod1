import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from '../Interfaces/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  url: string = 'http://localhost:3000/';
  
  constructor(private _colecaoservice: HttpClient) { }

  listar(): Observable<Colecao[]> {
    return this._colecaoservice.get<Colecao[]>(`${this.url}colecoes`);
  }
}
