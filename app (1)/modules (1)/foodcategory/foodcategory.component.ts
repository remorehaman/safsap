import { Component, OnInit } from '@angular/core';
import { CookerNearbyService } from 'src/app/services/cooker-nearby.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-foodcategory',
  templateUrl: './foodcategory.component.html',
  styleUrls: ['./foodcategory.component.css']
})
export class FoodcategoryComponent implements OnInit {

  foodleftsideList : any;
  cookersList : any = [];
  dishList : any;
  headerImage = 'https://eclickprojects.com/safsap/uploads/cooker_banners/2ivVAabmRz1590751303.jpg';
  //cat_slug : string;

  totalProduct:any; 
  cartFoods : any = [];
  cartPrice : any;

 
  
  constructor(
    private foodCategory: FoodCategoryService, 
    private cookernearBy : CookerNearbyService,
    
    //private route : ActivatedRoute,
    ) {  }

    
   
  ngOnInit(): void {

  //  if(this.route.snapshot.params['cat_slug']){
  //     this.cat_slug = this.route.snapshot.params['cat_slug']
  //     this.route.params.subscribe(
  //       (params:Params) =>{
  //         this.cat_slug = params['cat_slug']
  //       });
  //  }
    

    
    // ------------sidebar list------------
    this.foodCategory.getfoodCategories().subscribe(
      data => {
        //console.log(data);
        this.foodleftsideList = data;
        console.log(this.foodleftsideList)
      }
    )


    // ------------cookers list----------

      this.cookernearBy.getcookernearby().subscribe(
        data => {
          ///console.log(data);
          this.cookersList = data.cooker;
          console.log(this.cookersList);
        }
      )

      // -------------------dishes------------


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
