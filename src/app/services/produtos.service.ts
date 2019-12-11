import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../interfaces/Produtos';
import { tap, take } from 'rxjs/operators';


@Injectable()
export class ProductService {

  private readonly urlAPI = `${this.appService.baseURL}/products`;

  constructor(private appService: AppService, private http: HttpClient) {

  }

  getProducts() {
    return this.http.get<Produtos[]>(this.urlAPI)
    .pipe(
      tap(console.log)
    );
  }
  getProductsById(id) {
    return this.http.get<Produtos[]>(`${this.urlAPI}/${id}`)
    .pipe(
      tap(console.log)
    );
  }

  newProduct(produto) {
    return this.http.post<Produtos>(this.urlAPI, produto)
    .pipe (
      take(1)
    );
  }
  deleteProduct(id) {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }
}
