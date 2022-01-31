import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinglistDetailsComponent } from './bookinglist-details.component';

const routes: Routes = [{ path: '', component: BookinglistDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookinglistDetailsRoutingModule { }
