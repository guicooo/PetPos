import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { TitleComponent } from './shared/title/title.component';
import { TableFilterPipe } from './shared/search.pipe';
import { EditarprodutoComponent } from './pages/produtos/editarproduto/editarproduto.component';
import { NovoprodutoComponent } from './pages/produtos/novoproduto/novoproduto.component';
import { EditarfornecedoresComponent } from './pages/fornecedores/editarfornecedores/editarfornecedores.component';
import { NovofornecedoresComponent } from './pages/fornecedores/novofornecedores/novofornecedores.component';
import { NovoclientesComponent } from './pages/clientes/novoclientes/novoclientes.component';
import { EditarclientesComponent } from './pages/clientes/editarclientes/editarclientes.component';
import { AppService } from './app.service';
import { ProductService } from './services/produtos.service';
import { FornecedoresService } from './services/fornecedores.service';
import { ClientService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    FornecedoresComponent,
    ClientesComponent,
    TitleComponent,
    TableFilterPipe,
    EditarprodutoComponent,
    NovoprodutoComponent,
    EditarfornecedoresComponent,
    NovofornecedoresComponent,
    NovoclientesComponent,
    EditarclientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    TableFilterPipe
  ],
  providers: [
    AppService,
    ProductService,
    FornecedoresService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
