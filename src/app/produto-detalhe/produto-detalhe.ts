import { Component, inject, input, OnInit, signal } from '@angular/core';
import { LojaService } from '../services/loja-service';
import { CarrinhoService } from '../services/carrinho-service';
import { Produto } from '../models/produto';

@Component({
  imports: [],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.scss',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit {
  id = input.required<number>();
  produto = signal<Produto | undefined>(undefined)

  readonly #lojaService = inject(LojaService)
  readonly #carrinhoService = inject(CarrinhoService)

  ngOnInit(): void {
    this.detalharProduto()
  }

  detalharProduto() {
    this.#lojaService.obterProdutoPorId(this.id()).subscribe(prod => {
      this.produto.set(prod)
    })
  }

  adicionarAoCarrinho() {
    const prod = this.produto()
    if (prod) {
      this.#carrinhoService.adicionarItem(prod)
    }
  }
}