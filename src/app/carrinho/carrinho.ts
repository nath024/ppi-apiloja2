import { Component, computed, inject } from '@angular/core';
import { CarrinhoService } from '../services/carrinho-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-carrinho',
  styleUrl: './carrinho.scss',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  readonly #carrinhoService = inject(CarrinhoService)

  quantidadeItens = computed(() =>
    this.#carrinhoService.itens().reduce((soma, item) => soma + item.quantidade, 0)
  )
}