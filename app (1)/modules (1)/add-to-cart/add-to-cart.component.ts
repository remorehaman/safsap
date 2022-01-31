import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { FoodDetails } from 'src/app/model/food-details.model';
import { ProductDetailsModel } from 'src/app/model/product-details-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  siteUrl = environment.siteUrl
  totalProduct:any;
  index:any;
  cartPrice:any
  

  constructor() { }

   cartFoods : any = [];

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




      // let p = 0;
      // this.cartFoods.forEach((element,key) => {
      //   p = p + this.cartFoods[key]['addedqty'];
      //   let quan = p;
      //   console.log("",quan)      
      // });

      // let y = 0;
      // for(let x = 0; x > this.cartFoods.length; x++){
      //   y = y + this.cartFoods[x].addedqty;
      //   let d = y;
      //   console.log("add",d)
      // }


      // let total = 0;
      // for (var i = 0; i < this.cartFoods.length; i++) {

      //   total = total + this.cartFoods[i].price * this.cartFoods[i].addedqty;
      //   this.cartPrice = total;
        
      // } 
      // console.log("cart",this.cartPrice) 



      this.increase()
  }

  removeItem(index){
    this.cartFoods.splice(index,1)
     
  }

  // cartQuantity =  this.cartFoods.addedqty
  
  increase(){

    let cartQuantity =  this.cartFoods?.addedqty;

    this.cartFoods?.forEach((element,key) => {
      let p = this.cartFoods[key]['totalQuantity']
      if(cartQuantity < p){
        cartQuantity = cartQuantity + 1;
      } 
     
      else if(cartQuantity == p){
        alert("dumb you")
      }
      console.log("sss",p)
    });
   
   
  }
 

}
