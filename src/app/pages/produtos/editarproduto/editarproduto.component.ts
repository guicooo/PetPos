import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/produtos.service';
import { Observable, Subject, EMPTY, Subscription } from 'rxjs';
import { Produtos } from 'src/app/interfaces/Produtos';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarproduto',
  templateUrl: './editarproduto.component.html',
  styleUrls: ['./editarproduto.component.scss']
})
export class EditarprodutoComponent implements OnInit {

  public urlParams: Subscription;
  private id;
  public form: FormGroup;
  public product: Produtos = new Produtos();


  constructor(private productService: ProductService, private router: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.urlParams = this.router.params.subscribe((params: any) => {
      this.id = params['id'];
      this.productService.getProductsById(this.id)
      .subscribe(data => {
        this.product.description = data.description;
        this.product.name = data.name;
        this.product.price = data.price;
        this.product.quantity = data.quantity;
        this.product.vals = data.vals;
      });
    });

    this.form = this.formBuilder.group({
      description:  [this.product.description, [Validators.required]],
      name: [this.product.name, [Validators.required]],
      price: [this.product.price, [Validators.required]],
      quantity: [this.product.quantity, [Validators.required]],
      vals: [this.product.vals, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.product);
  }

}
