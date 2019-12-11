import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Fornecedores } from '../interfaces/Fornecedores';
import { tap, map } from 'rxjs/operators';


@Injectable()
export class FornecedoresService {

  private readonly urlAPI = `${this.appService.baseURL}/providers`;

  constructor(private appService: AppService, private http: HttpClient) {

  }

  getFornecedores() {
    return this.http.get<Fornecedores[]>(this.urlAPI)
    .pipe(
      tap(console.log)
    );
  }
}
