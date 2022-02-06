import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  constructor(private auth: Auth) { }

  login(username: string, password: string){
    from(signInWithEmailAndPassword(this.auth, username, password));
  }

  cadastro(username, email, password){

  }

}