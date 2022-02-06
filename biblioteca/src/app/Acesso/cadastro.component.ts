import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

//função que verifica se senha e confirmação de senha são iguais
/*export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confPassword = control.get('confPassword')?.value;

    if (password && confPassword && password !== confPassword) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}*/


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
/*
  cdstrForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confPassword: new FormControl('', Validators.required),
  },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get name() {
    return this.cdstrForm.get('name');
  }

  get email() {
    return this.cdstrForm.get('email');
  }

  get password() {
    return this.cdstrForm.get('password');
  }

  get confPassword() {
    return this.cdstrForm.get('confPassword');
  }

  //Função para criar novo usuário
  criar() {
    if (!this.cdstrForm.valid) return;

    const { name, email, password } = this.cdstrForm.value;
    this.authService.cadastro(name, email, password).pipe(
      this.toast.observe({
        success: 'Conta criada com sucesso!',
        loading: 'Cadastrando conta...',
        error: ({ message }) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    })
  }*/

  ngOnInit(): void {
  }
}
