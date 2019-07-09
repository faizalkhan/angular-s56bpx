import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

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
getShippingPrices()
{
  return this.http.get('/assets/shipping.json');
}

  constructor( private http:HttpClient ) { }

}