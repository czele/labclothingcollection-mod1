import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/Interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelo-listar',
  templateUrl: './modelo-listar.component.html',
  styleUrls: ['./modelo-listar.component.css']
})
export class ModeloListarComponent {

  modeloList: Modelo[] = [];

  constructor(private _service: ModeloService,
    private route: Router) {}

  ngOnInit(): void {
    this.listarModelo()
  }

  listarModelo = () => {
    this._service.listar().subscribe(modelo => this.modeloList = modelo)
  }

  editarModelo(id: number) {
    this.route.navigateByUrl(`/home/modelo/cadastrar/${id}`)
  }
}
