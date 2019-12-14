import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../../interfaces/Fornecedores';
import { Observable, Subject, EMPTY } from 'rxjs';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { catchError } from 'rxjs/operators';
declare var $ :any;


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  public searchText: string;
  public deleteItemNome: string;
  public deleteItemId: string;
  providers$: Observable<Fornecedores[]>;
  error$ = new Subject<boolean>();


  constructor(private providersService: FornecedoresService, private toastr: ToastrService) { }

  ngOnInit() {
    this. listProduct();
  }

  listProduct() {
    this.providers$ = this.providersService.getProviders()
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
    this.providersService.deleteProvider(this.deleteItemId)
    .subscribe( data => {
      $('#modalDelete').modal('hide');
      this. listProduct();
    },
    error =>  {
      this.toastr.error(`Ocorreu algum erro inesperado`);
      $('#modalDelete').modal('hide');
    }
    );
  }

}
