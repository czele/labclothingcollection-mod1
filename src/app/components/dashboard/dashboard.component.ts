import { Component } from '@angular/core';
import { Colecao } from 'src/app/Interfaces/colecao';
import { Modelo } from 'src/app/Interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  colecaoList: Colecao[] = [];
  somaOrcamento: number = 0;
  totalColecao: number = 0;
  totalModelo: number = 0;
  mediaOrc: number = 0;

  constructor(private _serviceColecao: ColecaoService, private _serviceModelo: ModeloService) {}

  ngOnInit(): void {
    this.listarColecao();
    this.listarModelo();
  }

  listarColecao() {
    this._serviceColecao.listar().subscribe(colecao => {
      this.colecaoList = colecao; 
      this.mediaOrc = this.mediaOrcamento(); 
      this.totalColecao = this.somaColecao();
      return this.ordenarOrcamento()
    });
  }

  listarModelo() {
    this._serviceModelo.listar().subscribe(modelo => {this.totalModelo = modelo.length});
  }

  ordenarOrcamento() {
    this.colecaoList.sort((a,b)=>(a.orcamento>b.orcamento) ? -1 : (a.orcamento<b.orcamento) ? 1 : 0);
  }

  somaColecao() {
    return this.totalColecao = this.colecaoList.length;
  }

  mediaOrcamento() {
    this.colecaoList.forEach(element => {this.somaOrcamento += element.orcamento});
    return this.somaOrcamento / this.colecaoList.length
  }
}
