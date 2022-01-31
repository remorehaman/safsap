import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  totalProduct:any;
  cartFoods : any = [];
  cartPrice :any

  constructor() { }
 
  ngOnInit(): void {
    
    this.cartFoods =  JSON.parse(localStorage.getItem("fooddetails")!)
    this.totalProduct = this.cartFoods?.length; 
    console.log("total->", this.totalProduct)


    let n = 0;
      this.cartFoods?.forEach((element,key) => {
        n = n + this.cartFoods[key]['addedqty'] * this.cartFoods[key]['price']
        this.cartPrice = n
        console.log("cart",this.cartPrice) 
      });
  }
 
}
