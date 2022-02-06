import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
//import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    //private toast: HotToastService
    ) { }

  ngOnInit(): void { }

  /*get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }*/


  //RECEBE EMAIL E SENHA; SE AS INFORMAÇÕES ESTIVEREM VÁLIDAS, O USUÁRIO VAI DIRETO PARA A HOME APÓS O LOGIN
  /*enviar() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).pipe(this.toast.observe({
      success: 'Bem-vindo à Biblioteca Luiz Brasil!',
      loading: 'Entrando...',
      error: 'Há algo de errado, verifique seus dados'
    })
    ).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }*/

}