import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodCategoryService } from 'src/app/services/food-category.service';

//import { DishesService } from 'src/app/services/dishes.service';



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  showSpinner = true;
  foodleftsideList : any;
  cat_slug: string = '';
  dishList : any;
  cartFoods : any = [];
  cartPrice :any;
  totalProduct:any;


  constructor(private route : ActivatedRoute, 
     private foodCategory: FoodCategoryService,
     private foodDishes : FoodCategoryService,
     
     ) { }

    

  ngOnInit(): void {
      
    this.cat_slug = this.route.snapshot.params['cat_slug'];
    // console.log('kkk->',this.cat_slug)
    
    //  here the params is observales so we subscribe to it//

    this.route.params.subscribe(
      (params:Params) =>{
        this.cat_slug = params['cat_slug'];  
    });

       
    // ------------fetching data from food categories----------

      this.foodCategory.getfoodCategories().subscribe(
      data => {
        this.foodleftsideList = data;
        console.log("FOOD CATEGORIES->",this.foodleftsideList)
      });

     
      this.foodDishes.getDishes(this.cat_slug).subscribe(
        data =>{
          this.dishList = data;
          this.showSpinner = false
          console.log("DISH->",this.dishList);
      })




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
    // --------------------------------------------


getPost(){
   //this.cat_slug = this.route.snapshot.params['cat_slug'];
    this.showSpinner =true;
    this.dishList = [];
    // console.log(this.dishList)
    
    this.foodDishes.getDishes(this.cat_slug).subscribe(
      data =>{
        this.dishList = data;
        console.log("DISH->",this.dishList);
        this.showSpinner = false
      })




    
     
   

   

}




}
