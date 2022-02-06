import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTAÇÕES FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { provideAuth, getAuth } from '@angular/fire/auth';

//IMPORTAÇÕES ANGULAR MATERIAL / OUTROS MÓDULOS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

//COMPONENTES
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './Acesso/cadastro.component';
import { HeaderComponent } from './Acesso/header.component';
import { HomeComponent } from './Acesso/home.component';
import { LoginComponent } from './Acesso/login.component';
import { LeitorService } from './Leitores/leitor.service';
import { AddLeitorComponent } from './Leitores/add-leitor.component';
import { ListaLeitorComponent } from './Leitores/lista-leitor.component';
import { EditaLeitorComponent } from './Leitores/edita-leitor.component';
import { AddEmpComponent } from './Emprestimos/add-emp.component';
import { EditaEmpComponent } from './Emprestimos/edita-emp.component';
import { ListaEmpComponent } from './Emprestimos/lista-emp.component';
import { ListaLivrosComponent } from './Livros/lista-livros.component';
import { AddLivrosComponent } from './Livros/add-livros.component';
import { EditaLivrosComponent } from './Livros/edita-livros.component';
import { EmprestimosService } from './Emprestimos/emprestimos.service';
import { SecaoService } from './Livros/secao.service';
import { HotToastModule } from '@ngneat/hot-toast';
import { initializeApp } from 'firebase/app';
import { DataPipe } from './Emprestimos/data.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AddLeitorComponent,
    ListaLeitorComponent,
    EditaLeitorComponent,
    AddEmpComponent,
    EditaEmpComponent,
    ListaEmpComponent,
    ListaLivrosComponent,
    AddLivrosComponent,
    EditaLivrosComponent,
    DataPipe,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatListModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule,
    HotToastModule,
    MatAutocompleteModule
    //provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    //provideAuth(() => getAuth())
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DataPipe,
    LeitorService,
    EmprestimosService,
    SecaoService
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
