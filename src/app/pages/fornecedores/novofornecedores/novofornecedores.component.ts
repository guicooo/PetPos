import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-novofornecedores',
  templateUrl: './novofornecedores.component.html',
  styleUrls: ['./novofornecedores.component.scss']
})
export class NovofornecedoresComponent implements OnInit {

  public form = new FormGroup ({
    cnpj: new FormControl (null, Validators.required),
    name: new FormControl (null, Validators.required),
    telephone: new FormControl (null, Validators.required),
  });

  constructor(private fornecedorService: FornecedoresService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.submited = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.fornecedorService.newProvider(this.form.value).subscribe(
        success => {
          console.log('sucesso');
          this.toastr.success(`Novo item criado com sucesso`);
        },
        error => this.toastr.error(`Ocorreu algum erro inesperado`)
      );
    }
  }
}

