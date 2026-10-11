import { Component, inject, input, OnInit, signal } from '@angular/core';
import { LojaService } from '../services/loja-service';
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

  ngOnInit(): void {
    this.detalharProduto()
  }

  detalharProduto() {
    this.#lojaService.obterProdutoPorId(this.id()).subscribe(prod => {
      this.produto.set(prod)
    })
  }
}
