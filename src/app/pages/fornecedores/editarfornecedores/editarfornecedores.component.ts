import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { Subscription } from 'rxjs';
import { Fornecedores } from './../../../interfaces/Fornecedores'

@Component({
  selector: 'app-editarfornecedores',
  templateUrl: './editarfornecedores.component.html',
  styleUrls: ['./editarfornecedores.component.scss']
})
export class EditarfornecedoresComponent implements OnInit {

  public urlParams: Subscription;
  private id;
  public form: FormGroup;
  public fornecedor: Fornecedores = new Fornecedores();


  constructor(private fornecedoresService: FornecedoresService,
              private router: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private _router: Router
              ) {

  }

  ngOnInit() {
    this.urlParams = this.router.params.subscribe((params: any) => {
      this.id = params['id'];
      this.fornecedoresService.getProvidersById(this.id)
      .subscribe(data => {
        this.fornecedor.cnpj = data.cnpj;
        this.fornecedor.name = data.name;
        this.fornecedor.telephone = data.telephone;
      });
    });

    this.form = this.formBuilder.group({
      cnpj:  [this.fornecedor.cnpj, [Validators.required]],
      name: [this.fornecedor.name, [Validators.required]],
      telephone: [this.fornecedor.telephone, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.fornecedor);
    this.fornecedoresService.editProviders(this.id, this.fornecedor)
    .subscribe(dados => {
      console.log(dados);
      this.toastr.success(`Produto atualizado com sucesso`);
      this._router.navigate(['/produtos']);
    },
    error => this.toastr.error(`Ocorreu algum erro inesperado`)
  )}

}
