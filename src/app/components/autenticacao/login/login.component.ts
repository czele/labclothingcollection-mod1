import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!: FormGroup;
  public logado: boolean = false;
  public naoLogado: boolean = false;
  public listaUsuarios: Usuario[] = [];

  constructor(private fl:FormBuilder, 
    private router: Router,
    private _service: UsuarioService) { }

  listarUsuarios() {
    this._service.listar().subscribe(usuario => this.listaUsuarios = usuario);
  }

  ngOnInit() {
    this.formLogin = this.fl.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
    localStorage.setItem("logado", "false");
    this.listarUsuarios();
  }

   onSubmit() {
    this.listaUsuarios.forEach(e => {  
      if(e.email === this.formLogin.value.email && e.senha === this.formLogin.value.senha) {
          this.logado = true;
          localStorage.setItem("logado", "true");
          this.router.navigate(['/home']);
        } else {
          this.naoLogado = true;
        }
    }); 
   }
}
