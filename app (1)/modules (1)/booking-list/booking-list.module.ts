import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingListRoutingModule } from './booking-list-routing.module';
import { BookingListComponent } from './booking-list.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [BookingListComponent],
  imports: [
    CommonModule,
    BookingListRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BookingListModule { }
