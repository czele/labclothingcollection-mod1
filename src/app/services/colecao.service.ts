import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from '../Interfaces/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  url: string = 'http://localhost:3000/';
  
  constructor(private _colecaoService: HttpClient) { }

  listar(): Observable<Colecao[]> {
    return this._colecaoService.get<Colecao[]>(`${this.url}colecoes`);
  }
}
