import { Routes } from '@angular/router';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';

export const routes: Routes = [
    {path: 'produtos/:id', component: ProdutoDetalhe}
];
