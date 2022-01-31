import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-individual-cooker-dishes',
  templateUrl: './individual-cooker-dishes.component.html',
  styleUrls: ['./individual-cooker-dishes.component.css']
})
export class IndividualCookerDishesComponent implements OnInit {


  cookerDishList : any;
  cookersDetails:any;
  userId : number;

  siteUrl = environment.siteUrl;

  showCookersThumb:any;

  @Input("cookers-thumbnailInfo")
  set setShowCookersThumbImage(_thumbDetails: any){
    this.showCookersThumb = _thumbDetails;
    //console.log("I am here",this.showCookersThumb)
  }
  

  constructor( ) { }

  ngOnInit(): void {
  }

}
