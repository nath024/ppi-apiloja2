import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../services/carrinho-service';

@Component({
  imports: [CurrencyPipe, RouterLink],
  selector: 'app-carrinho-compras',
  styleUrl: './carrinho-compras.scss',
  templateUrl: './carrinho-compras.html',
})
export class CarrinhoCompras {
  readonly carrinhoService = inject(CarrinhoService)

  itens = this.carrinhoService.itens
  total = this.carrinhoService.total
}