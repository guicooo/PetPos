import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../interfaces/Clientes';
import { tap } from 'rxjs/operators';


@Injectable()
export class ClientService {

  private readonly urlAPI = `${this.appService.baseURL}/clients`;

  constructor(private appService: AppService, private http: HttpClient) {

  }

  getProducts() {
    return this.http.get<Clientes[]>(this.urlAPI)
    .pipe(
      tap(console.log)
    );
  }
}
