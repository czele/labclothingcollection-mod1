import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/autenticacao/cadastro/cadastro.component';
import { EsqueceuSenhaComponent } from './components/autenticacao/esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { ColecaoCadastrarComponent } from './components/colecao/colecao-cadastrar/colecao-cadastrar.component';
import { ColecaoListarComponent } from './components/colecao/colecao-listar/colecao-listar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/site-layout/home/home.component';
import { ModeloCadastrarComponent } from './components/modelo/modelo-cadastrar/modelo-cadastrar.component';
import { ModeloListarComponent } from './components/modelo/modelo-listar/modelo-listar.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'home', redirectTo:'home/dashboard', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path:'home', component: HomeComponent, canActivate: [LoginGuard],
  children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'colecao', component: ColecaoListarComponent},
    {path:'colecao/cadastrar', component: ColecaoCadastrarComponent},
    {path:'colecao/cadastrar/:id', component: ColecaoCadastrarComponent},
    {path:'modelo', component: ModeloListarComponent},
    {path:'modelo/cadastrar', component: ModeloCadastrarComponent},
    {path:'modelo/cadastrar/:id', component: ModeloCadastrarComponent},
  ]   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
