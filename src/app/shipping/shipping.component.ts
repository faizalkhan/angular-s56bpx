import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(private Cartservice : CartService) { 
   this.shippingCosts = this.Cartservice.getShippingPrices();
  }
   

  ngOnInit() {
  }

}