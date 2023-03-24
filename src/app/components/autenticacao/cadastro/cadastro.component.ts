import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  formCadastroUsuario!: FormGroup;

  constructor(private formUsuario: FormBuilder) {}
  
  ngOnInit() {
    this.formCadastroUsuario = this.formUsuario.group({
      nome: [''],
      nomeEmpresa: [''],
      CNPJ: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^[0-9]+$')]],
      email: [''],
    })
  }

  onSubmit() {
    if(this.formCadastroUsuario.valid){
      console.log(this.formCadastroUsuario);
    }
  }
}
