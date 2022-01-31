import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CoookerInfoModel } from 'src/app/model/coooker-info-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteUrl = environment.siteUrl;
 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    smartSpeed:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  showHeaderSlider = true;
  showHeaderImage = false;
  showHeaderImageURL:string;
  showHeaderCookersInfo:CoookerInfoModel
  showTotalProduct:string;
  showCartPrice:number;

  @Input("header-slider")
  set setShowHeaderSlider(_slider: boolean){
    this.showHeaderSlider = _slider;
  }
  @Input("header-img")
  set setShowHeaderImage(_img: boolean){
    this.showHeaderImage = _img;
  }
  @Input("header-img-data")
  set setShowHeaderImageUrl(_imgUrl: string){
    this.showHeaderImageURL =  this.siteUrl + 'uploads/cooker_banners/'+_imgUrl;
  }
  @Input("header-cookers-info")
  set setShowHeaderCookersInfo(cookers_info: any){
    this.showHeaderCookersInfo = cookers_info;
    console.log("cookersinfo->",this.showHeaderCookersInfo)
  }
  
  @Input("total-product")
  set setTotalProduct(total_product: any){
    this.showTotalProduct = total_product;
    console.log("totalproduct->",this.showTotalProduct)
  }

  @Input("cart_product_price")
  set cartPrice(cart_price:any){
    this.showCartPrice = cart_price;
    
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  loggedIn(){
    return localStorage.getItem('token')
  }
  onLogOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
