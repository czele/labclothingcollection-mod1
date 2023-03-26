import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'http://localhost:3000/usuarios';
  
  constructor(private _usuarioService: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this._usuarioService.post<Usuario>(`${this.url}`, usuario)
  } 

  listar(): Observable<Usuario[]> {
    return this._usuarioService.get<Usuario[]>(`${this.url}`);
  }
}
