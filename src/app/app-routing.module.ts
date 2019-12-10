import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NovoprodutoComponent } from './pages/produtos/novoproduto/novoproduto.component';
import { EditarprodutoComponent } from './pages/produtos/editarproduto/editarproduto.component';
import { NovofornecedoresComponent } from './pages/fornecedores/novofornecedores/novofornecedores.component';
import { EditarfornecedoresComponent } from './pages/fornecedores/editarfornecedores/editarfornecedores.component';
import { NovoclientesComponent } from './pages/clientes/novoclientes/novoclientes.component';
import { EditarclientesComponent } from './pages/clientes/editarclientes/editarclientes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
    {path: 'produtos/novoproduto', component: NovoprodutoComponent},
    {path: 'produtos/:id', component: EditarprodutoComponent},

  {path: 'fornecedores', component: FornecedoresComponent},
    {path: 'fornecedores/novofornecedor', component: NovofornecedoresComponent},
    {path: 'fornecedores/:id', component: EditarfornecedoresComponent},

  {path: 'clientes', component: ClientesComponent},
    {path: 'clientes/novocliente', component: NovoclientesComponent},
    {path: 'clientes/:id', component: EditarclientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
