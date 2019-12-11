import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../interfaces/Clientes';
import { tap, take } from 'rxjs/operators';


@Injectable()
export class ClientService {

  private readonly urlAPI = `${this.appService.baseURL}/clients`;

  constructor(private appService: AppService, private http: HttpClient) {

  }

  getClients() {
    return this.http.get<Clientes[]>(this.urlAPI)
    .pipe(
      tap(console.log)
    );
  }
  getClientsById(id) {
    return this.http.get<Clientes[]>(`${this.urlAPI}/${id}`)
    .pipe(
      tap(console.log)
    );
  }

  newClient(cliente) {
    return this.http.post<Clientes>(this.urlAPI, cliente)
    .pipe (
      take(1)
    );
  }
  deleteClient(id) {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }
}
