import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-novoclientes',
  templateUrl: './novoclientes.component.html',
  styleUrls: ['./novoclientes.component.scss']
})
export class NovoclientesComponent implements OnInit {

  public form = new FormGroup ({
    address: new FormControl (null, Validators.required),
    cpf: new FormControl (null, Validators.required),
    name: new FormControl (null, Validators.required),
    telephone: new FormControl (null, Validators.required),
  });

  constructor(private clienteService: ClientService, private toastr : ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.submited = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.clienteService.newClient(this.form.value).subscribe(
        success => {
          console.log('sucesso');
          this.toastr.success(`Novo item criado com sucesso`);
        },
        error => this.toastr.error(`Ocorreu algum erro inesperado`)
      );
    }
  }
}

