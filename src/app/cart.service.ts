import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bookedOffers:any = []
  total:number = 0
  constructor() { }

  addToCart(offer:any){
    this.bookedOffers.push(offer)
  }

  getOffers(){
    return this.bookedOffers
  }

  clearCart(){
    return this.bookedOffers = []
  }

  sumPrices(){
    for(let offer of this.bookedOffers){
      this.total += offer.price
    }
    return this.total
  }
}
