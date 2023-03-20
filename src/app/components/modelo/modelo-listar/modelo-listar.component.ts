import { Component } from '@angular/core';
import { Modelo } from 'src/app/Interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelo-listar',
  templateUrl: './modelo-listar.component.html',
  styleUrls: ['./modelo-listar.component.css']
})
export class ModeloListarComponent {

  modeloList: Modelo[] = [];

  constructor(private _service: ModeloService) {}

  ngOnInit(): void {
    this.listarModelo()
  }

  listarModelo = () => {
    this._service.listar().subscribe(modelo => this.modeloList = modelo)
  }
}
