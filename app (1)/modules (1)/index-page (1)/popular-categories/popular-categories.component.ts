import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetPopularCategoriesService } from '../../../services/get-popular-categories.service';
@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit {
 

  allpopularCategories: any[] = [];

  popularcatOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    margin:20,
    smartSpeed:1000,
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
        items: 4
      }
    },
    nav: true
  }
  constructor(private popularCat: GetPopularCategoriesService) { }
  

  ngOnInit(): void {
    this.popularCat.getPopularCategories().subscribe(data =>{
      //console.log(data);
      this.allpopularCategories = data;
      console.log(this.allpopularCategories);
    })
   
  }

}
