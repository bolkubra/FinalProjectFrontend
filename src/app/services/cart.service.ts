import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Products){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if (item) {
      item.quantity+=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.product=product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }

  }

  removeFromCart(product:Products){
    let item:CartItem = CartItems.find(c=>product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }


  list():CartItem[]{
    return CartItems;
  }
}
