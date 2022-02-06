import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Acesso/home.component';
import { CadastroComponent } from './Acesso/cadastro.component';
import { LoginComponent } from './Acesso/login.component';
import { AddLeitorComponent } from './Leitores/add-leitor.component';
import { ListaLeitorComponent } from './Leitores/lista-leitor.component';
import { EditaLeitorComponent } from './Leitores/edita-leitor.component';
import { AddEmpComponent } from './Emprestimos/add-emp.component';
import { EditaEmpComponent } from './Emprestimos/edita-emp.component';
import { ListaEmpComponent } from './Emprestimos/lista-emp.component';
import { AddLivrosComponent } from './Livros/add-livros.component';
import { EditaLivrosComponent } from './Livros/edita-livros.component';
import { ListaLivrosComponent } from './Livros/lista-livros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-leitor', component: AddLeitorComponent},
  {path: 'lista-leitor', component: ListaLeitorComponent},
  {path: 'edita-leitor/:id', component: EditaLeitorComponent},
  {path: 'add-emp', component: AddEmpComponent},
  {path: 'edita-emp/:id', component: EditaEmpComponent},
  {path: 'lista-emp', component: ListaEmpComponent},
  {path: 'add-livros', component: AddLivrosComponent},
  {path: 'edita-livros/:id', component: EditaLivrosComponent},
  {path: 'lista-livros', component: ListaLivrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
