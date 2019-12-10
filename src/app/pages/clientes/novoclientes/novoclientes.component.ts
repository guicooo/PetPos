import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novoclientes',
  templateUrl: './novoclientes.component.html',
  styleUrls: ['./novoclientes.component.scss']
})
export class NovoclientesComponent implements OnInit {

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

