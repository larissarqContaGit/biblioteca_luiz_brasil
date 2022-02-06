import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimosService } from './emprestimos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edita-emp',
  templateUrl: './edita-emp.component.html',
  styleUrls: ['./edita-emp.component.css']
})
export class EditaEmpComponent implements OnInit {
  public editaForm: FormGroup;
  empRef: any;

  constructor(
    public empService: EmprestimosService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editaForm = this.formBuilder.group({
      codLeitor: new FormControl('', Validators.required),
      nomeLeitor: new FormControl('', Validators.required),
      emailLeitor: new FormControl('', Validators.required),
      telLeitor: new FormControl('', Validators.required),
      codLivro: new FormControl('', Validators.required),
      tituloLivro: new FormControl('', Validators.required),
      dataEmp: new FormControl('', Validators.required),
      dataDev: new FormControl('', Validators.required),
      status: new FormControl('')
    })
  }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 1, value: 'Dep 3' },
  ]

  comparaDatas(){
    let dataEmp = new Date(this.editaForm.get('dataEmp').value);
    let dataDev = new Date(this.editaForm.get('dataDev').value);

    console.log('Data Empréstimo: '+ dataEmp)
    console.log('Data Devolução: '+ dataDev)
      
    if(dataEmp > dataDev){
      console.log("Epa Epa Epa")
    }else{
      console.log('Tudo certo')
    }
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.empService.getEmpDoc(id).subscribe(res => {
      this.empRef = res;
      this.editaForm = this.formBuilder.group({
        codLeitor: new FormControl(this.empRef.codLeitor, Validators.required),
        nomeLeitor: new FormControl(this.empRef.nomeLeitor, Validators.required),
        emailLeitor: new FormControl(this.empRef.emailLeitor, Validators.required),
        telLeitor: new FormControl(this.empRef.telLeitor, Validators.required),
        codLivro: new FormControl(this.empRef.codLivro, Validators.required),
        tituloLivro: new FormControl(this.empRef.tituloLivro, Validators.required),
        dataEmp: new FormControl(this.empRef.dataEmp, Validators.required),
        dataDev: new FormControl(this.empRef.dataDev, Validators.required),
        status: new FormControl(this.empRef.status, Validators.required),
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.empService.updateEmp(this.editaForm.value, id);
    this.router.navigate(['lista-emp'])
  };

}
