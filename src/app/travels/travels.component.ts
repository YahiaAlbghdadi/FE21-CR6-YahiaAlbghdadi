import { Component, OnInit } from '@angular/core';
import { offers } from '../offers';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  offers = offers
  
  constructor(private serv:CartService, ) { }

  addToCart(i:any){
    this.serv.addToCart(offers[i])
  }
  

  ngOnInit(): void {
  }

}
