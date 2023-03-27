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

  constructor(private pegarEmail: FormBuilder,
    private _service: UsuarioService) {}

  ngOnInit() {
    this.formEsqueceu = this.pegarEmail.group({
      email: ['', [Validators.required]]})
      
      console.log(this.usuarioList)
  }

  async listarUsuario() {
    this.usuarioList = await firstValueFrom(this._service.listar())
    
  }

  onSubmit() {
    
  }

}
