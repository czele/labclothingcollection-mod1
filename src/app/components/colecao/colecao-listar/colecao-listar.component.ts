import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao';
import { Modelo } from 'src/app/Interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-colecao-listar',
  templateUrl: './colecao-listar.component.html',
  styleUrls: ['./colecao-listar.component.css']
})
export class ColecaoListarComponent implements OnInit {

  colecaoList: Colecao[] = [];
  modeloList: Modelo[] = [];
  listaIdColecao: number[] = [];
  quantidadeModelos: number[] = [];

  constructor(private _service: ColecaoService,
    private _serviceModelo: ModeloService,
    private route: Router) { }

  async ngOnInit() {
    await this.listarColecao();
    await this.listarModelo();

    // Criei uma lista de id de coleções
    this.colecaoList.forEach(colecao => this.listaIdColecao.push(colecao.id))
    // Percorri a lista com os ids das coleções
    this.listaIdColecao.forEach(
      colecaoId => {this.quantidadeModelos.push(
    // Filtrei a lista de modelos para saber onde o modelo.colecao é igual ao id da coleção
      this.modeloList.filter(modelo => modelo.colecao == colecaoId).length)});
    // Dei o length para saber a quantidade de modelos
    // A quantidade de modelos encontrados foi salva na lista quantidade.Modelos, que sempre terá o tamanho da lista de coleções
    // No HTML eu usei a propriedade index do ngFor para dar display da quantidade de modelos   
  }

  async listarModelo() {
    this.modeloList = await firstValueFrom(this._serviceModelo.listar());
  }

  async listarColecao() {
    this.colecaoList = await firstValueFrom(this._service.listar())
  }

  editarColecao(id: number) {
    this.route.navigateByUrl(`/home/colecao/cadastrar/${id}`)
  }

}
