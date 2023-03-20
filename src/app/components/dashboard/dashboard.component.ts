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

  constructor(private _service: ColecaoService) {}

  ngOnInit(): void {
    this.listarColecao()
  }

  listarColecao = () => {
    this._service.listar().subscribe(colecao => this.colecaoList = colecao)
  }

  
}
