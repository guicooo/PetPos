import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../interfaces/Clientes';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ClientService } from 'src/app/services/cliente.service';
import { catchError } from 'rxjs/operators';
declare var $ :any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public searchText: string;
  public deleteItemNome: string;
  public deleteItemId: string;
  clients$: Observable<Clientes[]>;
  error$ = new Subject<boolean>();


  constructor(private clientService: ClientService, private toastr : ToastrService) { }

  ngOnInit() {
    this. listProduct();
  }

  listProduct() {
    this.clients$ = this.clientService.getClients()
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
    this.clientService.deleteClient(this.deleteItemId)
    .subscribe( data => {
      $('#modalDelete').modal('hide');
      this.toastr.success('Item deletado com sucesso')
      this. listProduct();
    },
    error => {
      this.toastr.error(`Ocorreu algum erro inesperado`);
      $('#modalDelete').modal('hide');
    }
    );
  }

}
