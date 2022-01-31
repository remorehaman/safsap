import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {

  constructor(private httpClient: HttpClient) { }

  siteUrl = environment.siteUrl;

  getfoodCategories(){
    return this.httpClient.get<any>(this.siteUrl + "frontapi/data/getfoodCategories")
  }

  getDishes(cat_slug){
    //console.log("slug=>",cat_slug);
     const formData = new FormData();
     formData.append('category', cat_slug);
     console.log(formData)
    return this.httpClient.post(this.siteUrl + "frontapi/data/getfoodList",formData);
  }

  getIndividualDishDetails(dish_slug){
     const formData = new FormData();
     formData.append('dish_slug', dish_slug);
     console.log(formData)
    return this.httpClient.post(this.siteUrl + "frontapi/data/getSingleDishDetails",formData);
  }

  getIndividualCookerdetails(cooker_slug){
    const formData = new FormData();
    formData.append('hotel_slug',cooker_slug);
    console.log(formData);
    return this.httpClient.post(this.siteUrl + "frontapi/data/getcookerDetails",formData);
  }

  getIndividualCookerDishList(userId){
    const formData = new FormData();
    formData.append('userId',userId)
    return this.httpClient.post(this.siteUrl + "frontapi/data/listcookerdish", formData);
  }

  getUserInfo(limit,page,searchValue){
    const formData = new FormData();
    formData.append('limit',limit)
    formData.append('page',page)
    formData.append('searchValue',searchValue)
    return this.httpClient.post(this.siteUrl + "frontapi/data/user", formData);
  }

  getUserDetails(userId){
    const formData = new FormData();
    formData.append('userId',userId)
    return this.httpClient.post(this.siteUrl + "frontapi/data/getsingleUserDetails", formData)
  }
  getBookingList(){
    return this.httpClient.get(this.siteUrl + "frontapi/data/getBookingList");
  }
  getIndividualBookingDetails(booking_id){
    const formData = new FormData();
    formData.append("booking_id",booking_id)
    return this.httpClient.post(this.siteUrl + "frontapi/data/getSingleBookingDetails",formData)
  }


  // getIndividualDishDetails(params : any){
  //   const formData = new FormData();
  //   formData.append('cooker_id',params.cooker_id);
  //   formData.append('dishSlug',params.dish_slug); 
  //   console.log(params.cookerId);
  //   console.log(params.dishSlug);
  //   return this.httpClient.post(this.siteUrl + "frontapi/data/getSingleDishDetails",formData);
  // }
  
}
