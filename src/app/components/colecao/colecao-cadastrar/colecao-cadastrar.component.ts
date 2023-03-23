import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Colecao } from 'src/app/Interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecao-cadastrar',
  templateUrl: './colecao-cadastrar.component.html',
  styleUrls: ['./colecao-cadastrar.component.css']
})
export class ColecaoCadastrarComponent implements OnInit{

  formCadastrarColecao!: FormGroup;

  constructor(private formColecao: FormBuilder,
    private _service: ColecaoService
    ) {}
  
  ngOnInit() {
    this.formCadastrarColecao = this.formColecao.group({
      nome: [''],
      estacao: [''],
      lancamento: [''],
      responsavel: [''],
      orcamento: ['']
    })
  }

  onSubmit() {
    const colecaoCadastrada: Colecao = this.formCadastrarColecao.value
  }

  async cadastrarColecao() {
    await this._service.cadastrar(colecaoCadastrada);
  }


}
