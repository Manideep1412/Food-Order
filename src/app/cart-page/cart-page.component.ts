import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart.service';
import { cartItem } from '../shared/model/CartItem';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: cartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart(); //instance load data
  }
  changeQuantity(cartItem:cartItem, quantityInString:string){
    const quanitity = parseInt(quantityInString);
    this.cartService.changeQuanitity(cartItem.food.id, quanitity);
    this.setCart();

  }

}
