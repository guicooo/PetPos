import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Fornecedores } from '../interfaces/Fornecedores';
import { tap, take } from 'rxjs/operators';


@Injectable()
export class FornecedoresService {

  private readonly urlAPI = `${this.appService.baseURL}/providers`;

  constructor(private appService: AppService, private http: HttpClient) {

  }

  getProviders() {
    return this.http.get<Fornecedores[]>(this.urlAPI)
    .pipe(
      tap(console.log)
    );
  }
  getProvidersById(id) {
    return this.http.get<Fornecedores[]>(`${this.urlAPI}/${id}`)
    .pipe(
      tap(console.log)
    );
  }

  newProvider(fornecedor) {
    return this.http.post<Fornecedores>(this.urlAPI, fornecedor)
    .pipe (
      take(1)
    );
  }
  deleteProvider(id) {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }
}
