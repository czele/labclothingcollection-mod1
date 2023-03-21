import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { CadastroComponent } from './components/autenticacao/cadastro/cadastro.component';
import { EsqueceuSenhaComponent } from './components/autenticacao/esqueceu-senha/esqueceu-senha.component';
import { EnvioEmailComponent } from './components/autenticacao/envio-email/envio-email.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FullComponent } from './components/full/full.component';
import { ColecaoCadastrarComponent } from './components/colecao/colecao-cadastrar/colecao-cadastrar.component';
import { ColecaoEditarComponent } from './components/colecao/colecao-editar/colecao-editar.component';
import { ColecaoListarComponent } from './components/colecao/colecao-listar/colecao-listar.component';
import { ModeloCadastrarComponent } from './components/modelo/modelo-cadastrar/modelo-cadastrar.component';
import { ModeloListarComponent } from './components/modelo/modelo-listar/modelo-listar.component';
import { ModeloEditarComponent } from './components/modelo/modelo-editar/modelo-editar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    EsqueceuSenhaComponent,
    EnvioEmailComponent,
    HomeComponent,
    MenuComponent,
    FullComponent,
    ColecaoCadastrarComponent,
    ColecaoEditarComponent,
    ColecaoListarComponent,
    ModeloCadastrarComponent,
    ModeloListarComponent,
    ModeloEditarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
