import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../interfaces/Clientes';
declare var $ :any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public searchText: string;
  public clientes: Clientes[];
  public deleteItemNome: string;
  public deleteItemId: string;


  constructor() { }

  ngOnInit() {
     this.clientes = [
      {nome: 'Djalma Djavan', cpf: '202.145.652', telefone: '1111 - 1111', _id: '1'},
      {nome: 'Maria Djavan', cpf: '202.145.652', telefone: '1111 - 1111', _id: '2'},
      {nome: 'Antonio Djavan', cpf: '202.145.652', telefone: '1111 - 1111', _id: '3'},
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
