import { Component } from '@angular/core';
import { Colecao } from 'src/app/Interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  colecaoList: Colecao[] = [];
  tamanhoColecao: number = 0;

  constructor(private _service: ColecaoService) {}

  ngOnInit(): void {
    this.listarColecao();
  }

  listarColecao() {
    this._service.listar().subscribe(colecao => {this.colecaoList = colecao; return this.ordenarOrcamento()});
  }

  ordenarOrcamento() {
    this.colecaoList.sort((a,b)=>(a.orcamento>b.orcamento) ? -1 : (a.orcamento<b.orcamento) ? 1 : 0);
  }

  totalColecao() {
    return this.colecaoList.length;
  }

  mediaOrcamento() {
    this.colecaoList.forEach(element => {element.orcamento});
  }
}
