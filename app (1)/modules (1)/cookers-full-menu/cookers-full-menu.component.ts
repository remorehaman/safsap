import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Key } from 'protractor';
import { CoookerInfoModel } from 'src/app/model/coooker-info-model';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-cookers-full-menu',
  templateUrl: './cookers-full-menu.component.html',
  styleUrls: ['./cookers-full-menu.component.css']
})
export class CookersFullMenuComponent implements OnInit {

  userId : number;
  cookerDishList : any;
  cookersDetails:any
  cooker_slug : string = "";
  headerImage:string;
  cat_slug: string = '';
  dishList : any;
  foodleftsideList: any
  hotel_featured_image : string =""
  userInfo:CoookerInfoModel
  
  constructor(
    private cooker_details : FoodCategoryService,
    private route: ActivatedRoute,
    private foodCategory : FoodCategoryService
    ) { }

  ngOnInit(): void {



    this.cooker_slug = this.route.snapshot.params['hotel_slug'];
    this.cat_slug = this.route.snapshot.params['cat_slug'];
   
    this.route.params.subscribe(
      (params : Params) => {
        this.cooker_slug = params['hotel_slug'];
        this.cat_slug = params['cat_slug'];  
        
      })

    // ----------------left side------------------

    this.foodCategory.getfoodCategories().subscribe(
      data => {
        this.foodleftsideList = data;

        this.foodleftsideList.forEach((element,key) => {
          this.foodleftsideList[key]['hotel_slug'] =  this.cooker_slug
        });
        console.log("FOOD CATEGORIES->",this.foodleftsideList)
      });



    // -------------------right side--------------

    this.cooker_details.getIndividualCookerdetails(this.cooker_slug).subscribe(
      data => {
        this.cookersDetails = data
        this.headerImage = this.cookersDetails.hotel_featured_image
        this.userInfo = new CoookerInfoModel(
          this.cookersDetails.name,
          this.cookersDetails.user_profile_pic_resized,
          this.cookersDetails.food_type_name,
          this.cookersDetails.hotelClosedDay,
          5,
          this.cookersDetails.hotel_timing_start,
          this.cookersDetails.hotel_timing_end,
          );
        console.log("cooker->", this.cookersDetails)
            
      this.cooker_details.getIndividualCookerDishList(this.userId).subscribe(
        data => {
          this.cookerDishList = data

          this.cookerDishList.forEach((element,key) => {  
            this.cookerDishList[key]['hotel_slug'] = this.cooker_slug;          
          });
          
          console.log("cookerDishList ->", this.cookerDishList)
        })

      })
  }

  // getPost(){
  //   this.foodDishes.getDishes(this.cat_slug).subscribe(
  //     data =>{
  //       this.dishList = data;
  //       console.log("DISH->",this.dishList);
       
  //     })
  // }


}


