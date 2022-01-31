import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { parse } from 'path';
//import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodDetails } from 'src/app/model/food-details.model';
import { ProductDetailsModel } from 'src/app/model/product-details-model';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {




  siteUrl = environment.siteUrl;

  viewSpinner = false;
  dish_slug : string = "";
  cooker_id: number;
  individualDish:any;
  name : string;
  foodDetails_model:FoodDetails
  productDetailsModel:ProductDetailsModel;
  cartPrice:any
  totalProduct:any;
  foodDetails : any;

  constructor(private foodDishes: FoodCategoryService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   

   this.dish_slug = this.route.snapshot.params['dish_slug'];
   this.route.params.subscribe(
     (param : Params) => {
        this.dish_slug = param['dish_slug']
     })
     
    this.foodDishes.getIndividualDishDetails(this.dish_slug).subscribe(
      data =>{

        // ----------here the  data.dishdetails are show in html--------------
        this.individualDish = data;

        // --------------using the model----------

        this.productDetailsModel = new ProductDetailsModel (
          this.individualDish.dishdetails.id,
          this.individualDish.dishdetails.title,
          this.individualDish.dishdetails.quantity,
          this.individualDish.dishdetails.price,
          this.individualDish.dishdetails.description,
          this.individualDish.dishdetails.imagearr,
          this.individualDish.dishdetails.cat_name,
          this.individualDish.currency.symbol,
          
        ); 
        console.log("productdetail ->", this.productDetailsModel)
        console.log("DISH->",this.individualDish);
       
    });
 
    //this.name = JSON.parse(localStorage.getItem("token")!);
    let cartFoods : any = [];
      cartFoods =  JSON.parse(localStorage.getItem("fooddetails")!)


      this.totalProduct = cartFoods?.length; 
      console.log("total->", this.totalProduct)


      let n = 0;
      cartFoods?.forEach((element,key) => {
        n = n + cartFoods[key]['addedqty'] * cartFoods[key]['price']
        this.cartPrice = n
        console.log("cart",this.cartPrice) 
      });

    
  }

  
 
  addToCart(){
    this.viewSpinner = true;
    let cartFoods : any[];
    let navigate = true;
    if(localStorage.getItem('fooddetails')){
      var newProduct = true;
      
      cartFoods = JSON.parse(localStorage.getItem('fooddetails')!);
      cartFoods =  cartFoods.filter(e =>{
        if(e.id == this.productDetailsModel.id)
        {    
          // if( parseInt(e.addedqty) + this.quantity > this.individualDish.dishdetails.quantity){
          //   alert("do not add")
          // } else{
          //     e.addedqty = parseInt(e.addedqty) + this.quantity;
          //     this.router.navigate(['/','add-to-cart']);
          // }  
          // newProduct = false;    

            
            newProduct = false;    
            if( parseInt(e.addedqty) + this.quantity > this.individualDish.dishdetails.quantity){
              alert("do not add"); 
              navigate = false;
              this.viewSpinner = false;
            }
            else{
              e.addedqty = parseInt(e.addedqty) + this.quantity;
             
            }
           
        }
          
        return e
        
        //return e.id !== this.productDetailsModel.id
      });
      if(newProduct)
      {
        cartFoods.push({
          id:this.productDetailsModel.id,
          title:this.productDetailsModel.title,
          price: this.productDetailsModel.price,
          description:this.productDetailsModel.descprition,
          image: this.productDetailsModel.image,
          category: this.productDetailsModel.category,
          totalQuantity:this.productDetailsModel.quantity,
          addedqty:this.quantity,
          
        })
         //this.router.navigate(['/','add-to-cart']);
      }
      

    }else{
      cartFoods = [{
        id:this.productDetailsModel.id,
        title:this.productDetailsModel.title,
        price: this.productDetailsModel.price,
        description:this.productDetailsModel.descprition,
        image: this.productDetailsModel.image,
        category: this.productDetailsModel.category,
        totalQuantity:this.productDetailsModel.quantity,
        addedqty:this.quantity,
       
        
      }];
      //this.router.navigate(['/','add-to-cart']);
      
    }


    this.totalProduct = cartFoods?.length; 
    console.log("total->", this.totalProduct)
    
    localStorage.setItem("fooddetails", JSON.stringify( cartFoods))
    console.log("final array",cartFoods);
    if(navigate)
    {
      this.router.navigate(['/','add-to-cart']);
    }


    //console.log(this.productDetailsModel);
    //this.name ="sam"
    // localStorage.setItem("token", JSON.stringify( this.name))
    //this.viewSpinner = true;
    //this.foodDetails = Object.assign(this.productDetailsModel,this.foodDetails);
    //this.addMultipleFood(this.foodDetails)

    
    //this.increase();
   
    
  }

  quantity:number = 1;
  i=1;
  increase(){
    if(this.i < this.individualDish.dishdetails.quantity) {
      this.i++;
      this.quantity = this.i;

    }
    else if(this.i == this.individualDish.dishdetails.quantity){
      alert("You have reached maximum quantity");
      
    }
  }

  derease(){
    if(this.i > 1){
      this.i--;
      this.quantity = this.i;
     
    }
    else if(this.i === 1){
      alert("You have reached minimun quantity")
    }
  }
  
 
}


  // addMultipleFood(foodDetails){


  //   let cartFoods : any = [];
  //   if(localStorage.getItem('fooddetails')){
  //     cartFoods = JSON.parse(localStorage.getItem('fooddetails')!);
  //     cartFoods = [foodDetails,...cartFoods]

  //     //cartFoods = dishdetails['quantity_added'];
  //     //cartFoods['dishdetails'] = this.quantity;
  //    // cartFoods = JSON.parse(localStorage.getItem('quantityAdded')!);
  //   }
  //   else{
  //     cartFoods = [foodDetails];
  //   }
   
    
  //   cartFoods.forEach((element, key) => {
  //     // let productDetailsModel = element['dishdetails'];
  //     // productDetailsModel['quantity_added'] = this.quantity;

  //     // if(this.productDetailsModel.id === this.productDetailsModel.id){
  //     //   cartFoods[key]['quantity_added'] = this.quantity;
  //     // }
  //     cartFoods[key]['quantity_added'] = this.quantity;
  //   });
    

  //   //cartFoods.filter((element, key) => {
  //     //console.log("element->",element.dishdetails.id);
  //     //console.log("key->",key);
  //     // let dishdetails = element['dishdetails'];
  //     // dishdetails['quantity_added'] = this.quantity;
  //     // //cartFoods[key][dishdetails] = this.quantity;
  //     // cartFoods[key]['dishdetails'] = dishdetails;
  //   //});
  //   //console.log("cart ->",cartFoods)

  //   localStorage.setItem("fooddetails",JSON.stringify(cartFoods));
    


    
  // }