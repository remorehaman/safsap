import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  getBookingList : any = []

  constructor(private bookingList : FoodCategoryService) { }

  ngOnInit(): void {

    this.bookingList.getBookingList().subscribe(
      data => {
        this.getBookingList = data
        console.log("mama ->", data)
      }
    )
  }

}
