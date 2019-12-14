import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-novoproduto',
  templateUrl: './novoproduto.component.html',
  styleUrls: ['./novoproduto.component.scss']
})
export class NovoprodutoComponent implements OnInit {

  public form = new FormGroup ({
    description: new FormControl (null, Validators.required),
    name: new FormControl (null, Validators.required),
    price: new FormControl (null, Validators.required),
    quantity: new FormControl (null, Validators.required),
    vals: new FormControl (null, Validators.required),
  });

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.submited = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.productService.newProduct(this.form.value).subscribe(
        success => {
          console.log('sucesso');
          this.toastr.success(`Novo item criado com sucesso`);
        },
        error => this.toastr.error(`Ocorreu algum erro inesperado`)
      );
    }
  }
}

