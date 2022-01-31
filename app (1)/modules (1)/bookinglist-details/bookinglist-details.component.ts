import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-bookinglist-details',
  templateUrl: './bookinglist-details.component.html',
  styleUrls: ['./bookinglist-details.component.css']
})
export class BookinglistDetailsComponent implements OnInit {  

  booking_id : any
  bookingDetailsData :any;
  
  constructor(private bookingDetails : FoodCategoryService,private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.booking_id = this.route.snapshot.params['booking_id'];

    this.route.params.subscribe(
      (params : Params) => {
        this.booking_id = params['booking_id'];
         
      })

    this.bookingDetails.getIndividualBookingDetails(this.booking_id).subscribe(
      data => {
        this.bookingDetailsData = data
        console.log("sam->",data)
      }
    )

  }

}
