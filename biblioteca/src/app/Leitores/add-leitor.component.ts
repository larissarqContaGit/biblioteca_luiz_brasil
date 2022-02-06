import { Component, OnInit } from '@angular/core';
import { LeitorService } from './leitor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeitoresI } from './leitoresI.interface';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-leitor',
  templateUrl: './add-leitor.component.html',
  styleUrls: ['./add-leitor.component.css']
})

export class AddLeitorComponent implements OnInit {

  data_hoje: number = Date.now();

  leitores: LeitoresI[];

  sexo: any[] = [
    'Feminino',
    'Masculino',
    'Outro'
  ];

  constructor(
    public leitor: LeitorService,
    public formBuilder: FormBuilder,
    public router: Router) {

      this.leitor.form = new FormGroup({
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
  }


  onSubmit() {
    this.leitor.criaLeitor(this.leitor.form.value);
    this.onClear();
  }

  onClear() {
    this.leitor.form.reset()
  }

}
