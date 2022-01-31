import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoookerInfoModel } from 'src/app/model/coooker-info-model';
import { FoodCategoryService } from 'src/app/services/food-category.service';


@Component({
  selector: 'app-cookers-details',
  templateUrl: './cookers-details.component.html',
  styleUrls: ['./cookers-details.component.css']
})
export class CookersDetailsComponent implements OnInit {

  cooker_slug : string = "";
  cookerDishList : any;
  cookersDetails:any;
  userId : number;
  headerImage:string;
  userInfo:CoookerInfoModel
  

  
  constructor(private cooker_details : FoodCategoryService,
    //private user_Id : FoodCategoryService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {


    this.cooker_slug = this.route.snapshot.params['hotel_slug'];
   // this.userId = this.route.snapshot.params['userId'];
    this.route.params.subscribe(
      (param : Params) => {
        this.cooker_slug = param['hotel_slug']
      
      })



    this.cooker_details.getIndividualCookerdetails(this.cooker_slug).subscribe(
      data => {
        this.cookersDetails = data
        this.headerImage = this.cookersDetails.hotel_featured_image;
        //this.userInfo = this.cookersDetails;
        this.userInfo = new CoookerInfoModel(
          this.cookersDetails.name,
          this.cookersDetails.user_profile_pic_resized,
          this.cookersDetails.food_type_name,
          this.cookersDetails.hotelClosedDay,
          5,
          this.cookersDetails.hotel_timing_start,
          this.cookersDetails.hotel_timing_end,
          );
        console.log("user",this.userInfo)
       // this.userId = this.cookersDetails.userId
        //console.log(this.headerImage)
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

}

