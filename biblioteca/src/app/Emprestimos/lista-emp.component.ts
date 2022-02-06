import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { EmprestimosService } from './emprestimos.service';
import { Emprestimos } from './emprestI.interface';

@Component({
  selector: 'app-lista-emp',
  templateUrl: './lista-emp.component.html',
  styleUrls: ['./lista-emp.component.css']
})
export class ListaEmpComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['nome', 'email', 'tituloLivro', 'dataEmp', 'dataDev', 'status', 'acoes'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(
    private empService: EmprestimosService,
    private act: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(res=>{
      this.dataSource.data = res.map( e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as Emprestimos
      })
    });
  }

  //Ordenação
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeEmp(id: string) {
    this.empService.deletaEmp(id)
  }


}
