import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LojaService } from '../services/loja-service';
import { CarrinhoService } from '../services/carrinho-service';
import { Carrinho } from '../carrinho/carrinho';
import { Produto } from '../models/produto';

@Component({
  imports: [Carrinho, RouterLink],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.scss',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos implements OnInit {
  produtos = signal<Produto[]>([])

  readonly #lojaService = inject(LojaService)
  readonly #carrinhoService = inject(CarrinhoService)

  ngOnInit(): void {
    this.#lojaService.obterProdutos().subscribe(lista => {
      this.produtos.set(lista)
    })
  }

  adicionarAoCarrinho(produto: Produto) {
    this.#carrinhoService.adicionarItem(produto)
  }
}