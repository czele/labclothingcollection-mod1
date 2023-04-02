import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent {
  
  formEsqueceu!: FormGroup;
  usuarioList: Usuario[] = [];
  emailDigitado!: string;
  emailValidado: boolean = false;

  constructor(private pegarEmail: FormBuilder,
    private _service: UsuarioService) {}

  ngOnInit() {

    this.listarUsuario();

    this.formEsqueceu = this.pegarEmail.group({
      email: ['', [Validators.required, Validators.email]]});   
  }

  async listarUsuario() {
    this.usuarioList = await firstValueFrom(this._service.listar())
  }

  mensagemCadastrado() {
    this.emailDigitado = this.formEsqueceu.value.email;
    this.emailValidado = true;
  }

  onSubmit() {
    this.usuarioList.forEach(element => {
      if (element.email === this.formEsqueceu.value.email) {
        this.mensagemCadastrado();
      } else {
    }
    });
  }
}
