import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SlugPipe } from 'src/app/pipes/slug.pipe';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-user-info-modules',
  templateUrl: './user-info-modules.component.html',
  styleUrls: ['./user-info-modules.component.css']
})
export class UserInfoModulesComponent implements OnInit {


  totalProduct:any;
  cartPrice:any
  cartFoods : any = [];
  limit = 10;
  page = 1;
  searchValue = 0;

  user_information:any

  constructor(private userInfo: FoodCategoryService,private route:ActivatedRoute,private slugifyPipe:SlugPipe) { }

  ngOnInit(): void {


    // this.limit = this.route.snapshot.params['limit'];
    // this.page = this.route.snapshot.params['page'];
    // //this.searchValue = this.route.snapshot.params['searchValue'];

    // this.route.params.subscribe(
    //   (param : Params) => {
    //     this.limit = param['limit'];
    //     this.page = param['page'];
    //     //this.searchValue = param['searchValue'];
    //   })



    // var limit = 10;
    // var page = 1;
    // var searchValue = 0;
    
    this.userInfo.getUserInfo(this.limit,this.page,this.searchValue).subscribe(
      data => {
        this.user_information = data;
        
        // this.user_information.forEach((element,key) => {
        //   this.user_information[key]['user_slug'] = "sam"
        // });
        console.log("users->", this.user_information)
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

  slug(input: string){
    var your_new_slug = this.slugifyPipe.transform(input);
    console.log("slug->",your_new_slug)
  }

}
