import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../interfaces/Produtos';
declare var $ :any;

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public searchText: string;
  public produtos: Produtos[];
  public deleteItemNome: string;
  public deleteItemId: string;


  constructor() { }

  ngOnInit() {
     this.produtos = [
      {nome: 'Ração Dogshow', quantidade: '20', custoCompra: '230', custoVenda: '280', _id: '23424'},
      {nome: 'Ossinho descolado', quantidade: '1', custoCompra: '5', custoVenda: '8', _id: '23'},
      {nome: 'Pote de comida', quantidade: '15', custoCompra: '20', custoVenda: '30', _id: '23424'}
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
