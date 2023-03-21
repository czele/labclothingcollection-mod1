import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-colecao-cadastrar',
  templateUrl: './colecao-cadastrar.component.html',
  styleUrls: ['./colecao-cadastrar.component.css']
})
export class ColecaoCadastrarComponent implements OnInit{

  formCadastrarColecao!: FormGroup;

  constructor(private formColecao: FormBuilder) {}
  
  ngOnInit() {
    this.formCadastrarColecao = this.formColecao.group({
      id: [''],
      nome: [''],
      estacao: [''],
      lancamento: [''],
      responsavel: [''],
      orcamento: ['']
    })
  }

  onSubmit() {
    
  }
}
