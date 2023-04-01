import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao';
import { Modelo } from 'src/app/Interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelo-listar',
  templateUrl: './modelo-listar.component.html',
  styleUrls: ['./modelo-listar.component.css']
})
export class ModeloListarComponent {

  modeloList: Modelo[] = [];
  colecaoList: Colecao[] = [];
  colecaoCadaModelo: string[] = [];

  constructor(private _serviceModelo: ModeloService,
    private _serviceColecao: ColecaoService,
    private route: Router) { }

  async ngOnInit() {
    await this.listarModelo();
    await this.listarColecao();
    this.modeloList.forEach(modelo => {
      this.colecaoCadaModelo.push(this.colecaoList.filter(colecao => colecao.id == modelo.colecao)[0].nome)
    })

  }

  async listarModelo() {
    this.modeloList = await firstValueFrom(this._serviceModelo.listar())
  }

  editarModelo(id: number) {
    this.route.navigateByUrl(`/home/modelo/cadastrar/${id}`)
  }

  async listarColecao() {
    this.colecaoList = await firstValueFrom(this._serviceColecao.listar())
  }
}
