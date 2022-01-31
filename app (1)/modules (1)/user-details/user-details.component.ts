import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  userName:string ="";
  userId:number;
  getUserDetails : any;


  totalProduct:any;
  cartPrice:any
  cartFoods : any = [];

  constructor(private route :ActivatedRoute,private userDetails : FoodCategoryService) { }

  ngOnInit(): void {


    this.userName = this.route.snapshot.params['username'];
    this.userId = this.route.snapshot.params['userId']
    this.route.params.subscribe(
      (param : Params) => {
        this.userName = param['userName'];
        this.userId = param['userId'];
      })

    this.userDetails.getUserDetails(this.userId).subscribe(
      data => {

        this.getUserDetails = data;

        
        console.log("user details ->", this.getUserDetails)
      }
    )



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
