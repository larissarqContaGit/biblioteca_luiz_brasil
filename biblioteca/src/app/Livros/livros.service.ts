import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LivrosI } from './livrosI.interface';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros: Observable<LivrosI[]>

  constructor(private angularFirestore: AngularFirestore) { }

  form: FormGroup = new FormGroup({
    cod: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    tombo: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  getLivroDoc(id) {
    return this.angularFirestore.collection('livro-collection').doc(id).valueChanges()
  }

  pegaSecao(){
  }
  
  getLivroList() {
    return this.angularFirestore.collection('livro-collection').snapshotChanges();
  }

  criaLivro(livro: LivrosI) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('livro-collection').add(livro).then(response => { console.log(response) },
        error => reject(error));
    });
  }

  deletaLivro(id: string) {
    return this.angularFirestore.collection('livro-collection').doc(id).delete()
  }

  updateLivro(livro: LivrosI, id) {
    return this.angularFirestore.collection('livro-collection').doc(id).update({
      cod: livro.cod,
      isbn: livro.isbn,
      tombo: livro.tombo,
      titulo: livro.titulo,
      autor: livro.autor,
      categoria: livro.categoria,
    })
  }
}
