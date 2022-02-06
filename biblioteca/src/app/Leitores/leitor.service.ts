import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LeitoresI } from './leitoresI.interface';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class LeitorService {

  leitores: Observable<LeitoresI[]>

  constructor(private angularFirestore: AngularFirestore) { }

  form: FormGroup = new FormGroup({
    cod: new FormControl('', Validators.required),
    data_cad: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    data_nasc: new FormControl('', Validators.required),
    rg: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    nome_mae: new FormControl(''),
    cidade: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  convert(){
  }

  getLeitorDoc(id) {
    return this.angularFirestore.collection('leitor-collection').doc(id).valueChanges()
  }

  getLeitorList() {
    return this.angularFirestore.collection('leitor-collection').snapshotChanges();
  }

  criaLeitor(leitor: LeitoresI) {

    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('leitor-collection').add(leitor).then(response => { console.log(response) },
        error => reject(error));
    });
  }

  deletaLeitor(id: string) {
    return this.angularFirestore.collection('leitor-collection').doc(id).delete()
  }

  updateLeitor(leitor: LeitoresI, id) {
    return this.angularFirestore.collection('leitor-collection').doc(id).update({
      cod: leitor.cod,
      data_cad: leitor.data_cad,
      nome: leitor.nome,
      sexo: leitor.sexo,
      data_nasc: leitor.data_nasc,
      rg: leitor.rg,
      cpf: leitor.cpf,
      nome_mae: leitor.nome_mae,
      cidade: leitor.cidade,
      bairro: leitor.bairro,
      rua: leitor.rua,
      telefone: leitor.telefone,
      email: leitor.email
    })
  }
}