import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarproduto',
  templateUrl: './editarproduto.component.html',
  styleUrls: ['./editarproduto.component.scss']
})
export class EditarprodutoComponent implements OnInit {

  public form = new FormGroup ({
    nome: new FormControl (null, Validators.required),
    quantidade: new FormControl (null, Validators.required),
    custoCompra: new FormControl (null, Validators.required),
    custoVenda: new FormControl (null, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('1');
  }
}
