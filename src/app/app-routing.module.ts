import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/autenticacao/cadastro/cadastro.component';
import { EnvioEmailComponent } from './components/autenticacao/envio-email/envio-email.component';
import { EsqueceuSenhaComponent } from './components/autenticacao/esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { ColecaoCadastrarComponent } from './components/colecao/colecao-cadastrar/colecao-cadastrar.component';
import { ColecaoEditarComponent } from './components/colecao/colecao-editar/colecao-editar.component';
import { ColecaoListarComponent } from './components/colecao/colecao-listar/colecao-listar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ModeloCadastrarComponent } from './components/modelo/modelo-cadastrar/modelo-cadastrar.component';
import { ModeloEditarComponent } from './components/modelo/modelo-editar/modelo-editar.component';
import { ModeloListarComponent } from './components/modelo/modelo-listar/modelo-listar.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'home', redirectTo:'home/dashboard', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path:'envio-email', component: EnvioEmailComponent},
  {path:'home', component: HomeComponent, canActivate: [LoginGuard],
  children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'colecao', component: ColecaoListarComponent},
    {path:'colecao/cadastrar', component: ColecaoCadastrarComponent},
    {path:'colecao/editar', component: ColecaoEditarComponent},
    {path:'modelo', component: ModeloListarComponent},
    {path:'modelo/cadastrar', component: ModeloCadastrarComponent},
    {path:'modelo/editar', component: ModeloEditarComponent},
  ]   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
