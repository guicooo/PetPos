import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Clientes } from 'src/app/interfaces/Clientes';
import { ClientService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.component.html',
  styleUrls: ['./editarclientes.component.scss']
})
export class EditarclientesComponent implements OnInit {

  public urlParams: Subscription;
  private id;
  public form: FormGroup;
  public client: Clientes = new Clientes();


  constructor(private clientService: ClientService,
              private router: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private _router: Router
              ) {

  }

  ngOnInit() {
    this.urlParams = this.router.params.subscribe((params: any) => {
      this.id = params['id'];
      this.clientService.getClientsById(this.id)
      .subscribe(data => {
        this.client.address = data.address;
        this.client.cpf = data.cpf;
        this.client.name = data.name;
        this.client.telephone = data.telephone;
      });
    });



    this.form = this.formBuilder.group({
      address:  [this.client.address, [Validators.required]],
      cpf: [this.client.cpf, [Validators.required]],
      name: [this.client.name, [Validators.required]],
      telephone: [this.client.telephone, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.client);
    this.clientService.editClient(this.id, this.client)
    .subscribe(dados => {
      console.log(dados);
      this.toastr.success(`Cliente atualizado com sucesso`);
      this._router.navigate(['/clientes']);
    },
    error => this.toastr.error(`Ocorreu algum erro inesperado`)
  )}
}
