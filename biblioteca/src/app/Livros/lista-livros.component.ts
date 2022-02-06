import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { LivrosService } from './livros.service';
import { LivrosI } from './livrosI.interface';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['cod', 'titulo', 'tombo', 'isbn', 'acoes'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(
    private livroService: LivrosService,
    private act: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livroService.getLivroList().subscribe(res=>{
      this.dataSource.data = res.map( e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as LivrosI
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

removeLivro(id: string) {
  this.livroService.deletaLivro(id)
}

}
