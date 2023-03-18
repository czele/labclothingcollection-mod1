import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';
import { EnvioEmailComponent } from './components/envio-email/envio-email.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadastrarComponent } from './components/colecao/cadastrar/cadastrar.component';
import { EditarComponent } from './components/colecao/editar/editar.component';
import { ListarComponent } from './components/colecao/listar/listar.component';
import { CadastarComponent } from './components/modelo/cadastar/cadastar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    EsqueceuSenhaComponent,
    EnvioEmailComponent,
    HomeComponent,
    MenuComponent,
    CadastrarComponent,
    EditarComponent,
    ListarComponent,
    CadastarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
