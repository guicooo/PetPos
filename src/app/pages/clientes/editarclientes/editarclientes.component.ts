import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.component.html',
  styleUrls: ['./editarclientes.component.scss']
})
export class EditarclientesComponent implements OnInit {


  public form = new FormGroup ({
    nome: new FormControl (null, Validators.required),
    cpf: new FormControl (null, Validators.required),
    telefone: new FormControl (null, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('1');
  }
}
