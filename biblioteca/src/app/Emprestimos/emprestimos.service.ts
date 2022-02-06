import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Emprestimos } from './emprestI.interface';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  emprestimos: Observable<Emprestimos[]>

  constructor(private angularFirestore: AngularFirestore) {
}

  form: FormGroup = new FormGroup({
    codLeitor: new FormControl('', Validators.required),
    nomeLeitor: new FormControl('', Validators.required),
    emailLeitor: new FormControl('', Validators.required),
    telLeitor: new FormControl('', Validators.required),
    codLivro: new FormControl('', Validators.required),
    tituloLivro:new FormControl('', Validators.required),
    dataEmp: new FormControl('', Validators.required),
    dataDev: new FormControl('', Validators.required),
    status: new FormControl('')
  });

  getEmpDoc(id){
    return this.angularFirestore.collection('emprestimo-collection').doc(id).valueChanges()
  }


  getEmpList(){
    return this.angularFirestore.collection('emprestimo-collection').snapshotChanges();
  }

  criaEmp(emprestimo: Emprestimos){
    
    return new Promise<any>((resolve, reject)=>{
      this.angularFirestore.collection('emprestimo-collection').add(emprestimo).then(response => {console.log(response)},
      error => reject(error));
    });
  }

  deletaEmp(id: string){
    return this.angularFirestore.collection('emprestimo-collection').doc(id).delete()
  }

  updateEmp(emprestimo: Emprestimos, id){
    return this.angularFirestore.collection('emprestimo-collection').doc(id).update({
      codLeitor: emprestimo.codLeitor,
      nomeLeitor: emprestimo.nomeLeitor,
      emailLeitor: emprestimo.emailLeitor,
      telLeitor: emprestimo.telLeitor,
      codLivro: emprestimo.codLivro,
      tituloLivro: emprestimo.tituloLivro,
      dataEmp: emprestimo.dataEmp,
      dataDev: emprestimo.dataDev,
      status: emprestimo.status,
    })
  }

}


