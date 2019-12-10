import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../../interfaces/Fornecedores';
declare var $ :any;


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  public searchText: string;
  public fornecedores: Fornecedores[];
  public deleteItemNome: string;
  public deleteItemId: string;


  constructor() { }

  ngOnInit() {
     this.fornecedores = [
      {nome: 'Pets', cnpj: '324.234.665', telefone: '1111-1111', seguimento: 'Ração',_id: '24234243'},
      {nome: 'Cobasi', cnpj: '324.234.665', telefone: '1111-1111', seguimento: 'Diversos', _id: '24234243'},
    ];
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
