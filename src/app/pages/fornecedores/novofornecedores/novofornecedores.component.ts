import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novofornecedores',
  templateUrl: './novofornecedores.component.html',
  styleUrls: ['./novofornecedores.component.scss']
})
export class NovofornecedoresComponent implements OnInit {

  public form = new FormGroup ({
    nome: new FormControl (null, Validators.required),
    cnpj: new FormControl (null, Validators.required),
    telefone: new FormControl (null, Validators.required),
    seguimento: new FormControl (null, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('1');
  }
}

