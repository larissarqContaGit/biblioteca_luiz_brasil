import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { LeitoresI } from './leitoresI.interface';
import { LeitorService } from './leitor.service';

@Component({
  selector: 'app-lista-leitor',
  templateUrl: './lista-leitor.component.html',
  styleUrls: ['./lista-leitor.component.css']
})

export class ListaLeitorComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['cod', 'nome', 'email', 'telefone', 'data_cad', 'acoes'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(
    private leitorService: LeitorService,
    private act: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.leitorService.getLeitorList().subscribe(res=>{
        this.dataSource.data = res.map( e=>{
          return{
            id: e.payload.doc.id,
            ...e.payload.doc.data() as{}
          }as LeitoresI
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

  removeLeitor(id: string) {
    this.leitorService.deletaLeitor(id)
  }

}
