import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../interfaces/Produtos';
import { tap, map } from 'rxjs/operators';


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
}
