import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modelo-cadastrar',
  templateUrl: './modelo-cadastrar.component.html',
  styleUrls: ['./modelo-cadastrar.component.css']
})
export class ModeloCadastrarComponent {

  formCadastrarModelo!: FormGroup;

  constructor(private formModelo: FormBuilder) {}
  
  ngOnInit() {
    this.formCadastrarModelo = this.formModelo.group({
      nome: [''],
      tipo: [''],
      colecao: [''],
      responsavel: [''],
      bordado: [''],
      estampa: ['']
    })
  }

  onSubmit() {
    console.log(this.formCadastrarModelo)
  }

}
