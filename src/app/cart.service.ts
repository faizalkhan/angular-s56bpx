import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class CartService {

 items =[];
 
 addtocart(product)
 {
   this.items.push(product);
 }
 getItems() {
    return this.items;
  }

clearItem()
{
  this.items =[];
  return this.items;

}

  constructor() { }

}