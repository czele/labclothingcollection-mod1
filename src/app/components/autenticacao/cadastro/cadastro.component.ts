import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  formCadastroUsuario!: FormGroup;

  constructor(private formUsuario: FormBuilder,
    private _service: UsuarioService) {}
  
  ngOnInit() {
    this.formCadastroUsuario = this.formUsuario.group({
      nome: ['', [Validators.required]],
      nomeEmpresa: ['', [Validators.required],],
      cnpj: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if(this.formCadastroUsuario.valid && (this.formCadastroUsuario.value.senha === this.formCadastroUsuario.value.confirmarSenha)){
      this._service.cadastrar(this.formCadastroUsuario.value).subscribe();
    }
  }
}
