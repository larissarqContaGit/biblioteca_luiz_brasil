import { Component, OnInit } from '@angular/core';
import { EmprestimosService } from './emprestimos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emprestimos } from './emprestI.interface';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {


  Emprestimos: Emprestimos[];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    public service: EmprestimosService,
    public formBuilder: FormBuilder,
    public router: Router) {

    this.service.form = new FormGroup({
      codLeitor: new FormControl('', Validators.required),
      nomeLeitor: new FormControl('', Validators.required),
      emailLeitor: new FormControl('', Validators.required),
      telLeitor: new FormControl('', Validators.required),
      codLivro: new FormControl('', Validators.required),
      tituloLivro: new FormControl('', Validators.required),
      dataEmp: new FormControl('', Validators.required),
      dataDev: new FormControl('', Validators.required),
      status: new FormControl('')
    });
  }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 1, value: 'Dep 3' },
  ]



  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  comparaDatas(){
    let dataEmp = new Date(this.service.form.get('dataEmp').value);
    let dataDev = new Date(this.service.form.get('dataDev').value);

    console.log('Data Empréstimo: '+ dataEmp)
    console.log('Data Devolução: '+ dataDev)
      
    if(dataEmp > dataDev){
      console.log("Epa Epa Epa")
    }else{
      console.log('Tudo certo')
    }
  }


  onSubmit() {
    this.service.criaEmp(this.service.form.value);
    this.onClear();
  }

  onClear() {
    this.service.form.reset();
  }

}