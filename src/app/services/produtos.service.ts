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
    return this.http.get<Produtos[]>(this.urlAPI, this.appService.requestOptions)
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
    return this.http.post<Produtos>(this.urlAPI, produto, this.appService.requestOptions)
    .pipe (
      take(1)
    );
  }

  editProduct(id, produto) {
    return this.http.put<Produtos>(`${this.urlAPI}/${id}`, produto, this.appService.requestOptions)
    .pipe (
      take(1)
    );
  }

  deleteProduct(id) {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }
}
