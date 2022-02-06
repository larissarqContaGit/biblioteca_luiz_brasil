import { Component, OnInit } from '@angular/core';
import { LeitorService } from './leitor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edita-leitor',
  templateUrl: './edita-leitor.component.html',
  styleUrls: ['./edita-leitor.component.css']
})
export class EditaLeitorComponent implements OnInit {
  
  public editaLeitor: FormGroup;
  leitorRef: any;

  sexo: any[] = [
    'Feminino',
    'Masculino',
    'Outro'
  ];

  constructor(
    public leitor: LeitorService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    public router: Router) {

      this.editaLeitor = this.formBuilder.group({
        cod : new FormControl('', Validators.required),
        data_cad : new FormControl('', Validators.required),
        nome : new FormControl('', Validators.required),
        sexo : new FormControl('',  Validators.required),
        data_nasc : new FormControl('', Validators.required),
        rg : new FormControl('', Validators.required),
        cpf : new FormControl('', Validators.required),
        nome_mae: new FormControl(''),
        cidade: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        rua: new FormControl('', Validators.required),
        telefone: new FormControl('', [Validators.required, Validators.minLength(9)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }
  

 ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.leitor.getLeitorDoc(id).subscribe(res=>{
      this.leitorRef = res;
      this.editaLeitor = this.formBuilder.group({
        cod : new FormControl(this.leitorRef.cod, Validators.required),
        data_cad : new FormControl(this.leitorRef.this, Validators.required),
        nome : new FormControl(this.leitorRef.nome, Validators.required),
        sexo : new FormControl(this.leitorRef.sexo,  Validators.required),
        data_nasc : new FormControl(this.leitorRef.data_nasc, Validators.required),
        rg : new FormControl(this.leitorRef.rg, Validators.required),
        cpf : new FormControl(this.leitorRef.cpf, Validators.required),
        nome_mae: new FormControl(this.leitorRef.nome_mae),
        cidade: new FormControl(this.leitorRef.cidade, Validators.required),
        bairro: new FormControl(this.leitorRef.bairro, Validators.required),
        rua: new FormControl(this.leitorRef.rua, Validators.required),
        telefone: new FormControl(this.leitorRef.telefone, [Validators.required, Validators.minLength(9)]),
        email: new FormControl(this.leitorRef.email, [Validators.required, Validators.email]),
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');
    this.leitor.updateLeitor(this.editaLeitor.value, id);
    this.router.navigate(['lista-leitor'])
  };
  
}