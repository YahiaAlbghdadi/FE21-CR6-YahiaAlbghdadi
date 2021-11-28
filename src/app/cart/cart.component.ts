import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  offers:any
  totalPrice:any
  tenPercent:any
  twentyPercent:any
  roundedTen:any
  constructor(private serv:CartService) { }

  checkout(){
    alert("The total Price is $" + this.totalPrice +"", )
    this.serv.clearCart()
  }

  ngOnInit(): void {
    
    this.offers = this.serv.getOffers()
    this.totalPrice = this.serv.sumPrices()
    this.tenPercent = this.totalPrice * 0.9
    this.twentyPercent = this.totalPrice * 0.8
    this.roundedTen = this.tenPercent.toFixed(2)
    this.twentyPercent.toFixed(2)

    
  }

}
