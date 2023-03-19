import { Component } from '@angular/core';
import { Colecao } from 'src/app/Interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecao-listar',
  templateUrl: './colecao-listar.component.html',
  styleUrls: ['./colecao-listar.component.css']
})
export class ColecaoListarComponent {

  colecaoList: Colecao[] = [];

  constructor(private _service: ColecaoService) {}

  ngOnInit(): void {
    this.listarColecao()
  }

  listarColecao = () => {
    this._service.listar().subscribe(colecao => this.colecaoList = colecao)
  }
} 
