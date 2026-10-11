import { Routes } from '@angular/router';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { CarrinhoCompras } from './carrinho-compras/carrinho-compras';

export const routes: Routes = [
    {path: 'produtos/:id', component: ProdutoDetalhe},
    { path: '', component: ListaProdutos },
    { path: 'carrinho', component: CarrinhoCompras }
];
