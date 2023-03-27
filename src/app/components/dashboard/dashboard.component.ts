import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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
  modeloList: Modelo[] = [];
  listaIdColecao: number[] = [];
  quantidadeModelos: number[] = [];
  somaOrcamento: number = 0;
  totalColecao: number = 0;
  totalModelo: number = 0;
  mediaOrc: number = 0;

  constructor(private _serviceColecao: ColecaoService, 
    private _serviceModelo: ModeloService) {}

  async ngOnInit() {
    this.listarColecao();
    await this.listarModelo();

    this.colecaoList.forEach(colecao => this.listaIdColecao.push(colecao.id))
    this.listaIdColecao.forEach(
      colecaoId => {this.quantidadeModelos.push(
        this.modeloList.filter(modelo => modelo.colecao == colecaoId).length)});
  }

  listarColecao() {
    this._serviceColecao.listar().subscribe(colecao => {
      this.colecaoList = colecao; 
      this.mediaOrc = this.mediaOrcamento(); 
      this.totalColecao = this.somaColecao();
      return this.ordenarOrcamento()
    });
  }

  async listarModelo() {
    this.modeloList = await firstValueFrom(this._serviceModelo.listar());
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
