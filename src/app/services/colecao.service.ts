import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from '../Interfaces/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  url: string = 'http://localhost:3000/colecoes';
  
  constructor(private _colecaoService: HttpClient) { }

  listar(): Observable<Colecao[]> {
    return this._colecaoService.get<Colecao[]>(`${this.url}`);
  }

  cadastrar(colecao: Colecao): Observable<Colecao> {
    return this._colecaoService.post<Colecao>(`${this.url}`, colecao)
  } 

  listarUm(id: number): Observable<any> {
    return this._colecaoService.get<Colecao>(`${this.url}/${id}`)
  }

  excluir(id: number): Observable<any> {
    return this._colecaoService.delete<any>(`${this.url}/${id}`)
  }
}
