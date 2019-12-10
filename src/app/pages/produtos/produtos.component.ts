import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../interfaces/Produtos';
import { ProductService } from 'src/app/services/produtos.service';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
declare var $ :any;

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public searchText: string;
  public deleteItemNome: string;
  public deleteItemId: string;
  products$: Observable<Produtos[]>;
  error$ = new Subject<boolean>();


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts()
    .pipe(
      catchError(error => {
        console.log(error);
        this.error$.next(true);
        return EMPTY;
      })
    );
  }


  deleteModal(id, nome) {
    $('#modalDelete').modal('show');
    this.deleteItemNome = nome;
    this.deleteItemId = id;
  }
  delete() {
    console.log(this.deleteItemId);
  }

}
