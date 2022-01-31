import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookinglistDetailsRoutingModule } from './bookinglist-details-routing.module';
import { BookinglistDetailsComponent } from './bookinglist-details.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [BookinglistDetailsComponent],
  imports: [
    CommonModule,
    BookinglistDetailsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BookinglistDetailsModule { }
