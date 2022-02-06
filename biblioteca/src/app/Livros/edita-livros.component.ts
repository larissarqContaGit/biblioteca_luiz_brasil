import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from './livros.service';
import { LivrosI } from './livrosI.interface';

@Component({
  selector: 'app-edita-livros',
  templateUrl: './edita-livros.component.html',
  styleUrls: ['./edita-livros.component.css']
})
export class EditaLivrosComponent implements OnInit {

  public editaForm: FormGroup;
  livroRef: any;

  categoria: any[] = [
    'Economia',
    'Didático',
    'Literatura Estrangeira'
  ];

  constructor(
    public livro: LivrosService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    public router: Router
  ) {

    this.editaForm = this.formBuilder.group({
      cod : new FormControl('', Validators.required),
      isbn : new FormControl('', Validators.required),
      tombo : new FormControl('', Validators.required),
      titulo : new FormControl('',  Validators.required),
      autor: new FormControl('', Validators.required),
      categoria : new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.livro.getLivroDoc(id).subscribe(res=>{
      this.livroRef = res;
      this.editaForm = this.formBuilder.group({
        cod : new FormControl(this.livroRef.cod, Validators.required),
        isbn : new FormControl(this.livroRef.isbn, Validators.required),
        tombo : new FormControl(this.livroRef.tombo, Validators.required),
        titulo : new FormControl(this.livroRef.titulo,  Validators.required),
        autor: new FormControl(this.livroRef.autor, Validators.required),
        categoria : new FormControl(this.livroRef.categoria, Validators.required)
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');
    this.livro.updateLivro(this.editaForm.value, id);
    this.router.navigate(['lista-livros'])
  };

}
