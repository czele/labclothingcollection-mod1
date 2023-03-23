import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      // CNPJ: [''], Validators.minLength(14)
      email: [''],
    })
  }

  onSubmit() {
    
  }
}
