import { Component, OnInit } from '@angular/core';
import { LivrosService } from './livros.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { LivrosI } from './livrosI.interface';
import { FormControl, Validators } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { secaoLivro } from './secaoLivro.interface';

@Component({
  selector: 'app-add-livros',
  templateUrl: './add-livros.component.html',
  styleUrls: ['./add-livros.component.css'],
})
export class AddLivrosComponent implements OnInit {
  private secaoColecao: AngularFirestoreCollection;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  livros: LivrosI[];

  secao = [];

  categoria: any[] = ['Economia', 'Didático', 'Literatura Estrangeira'];

  constructor(
    public livro: LivrosService,
    public formBuilder: FormBuilder,
    public router: Router,
    public angFire: AngularFirestore
  ) {
    this.livro.form = new FormGroup({
      cod: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      tombo: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  pegaSecao() {
    if (this.secao && this.secao.length) {
      return this.secao;
    } else {
      return this.angFire
        .collection('secao', (ref) => {
          return ref.orderBy('secaoItem');
        })
        .valueChanges()
        .pipe(tap((secao) => (this.secao = secao)));
    }
  }

  onSubmit() {
    this.livro.criaLivro(this.livro.form.value);
    this.onClear();
  }

  onClear() {
    this.livro.form.reset();
  }
}
