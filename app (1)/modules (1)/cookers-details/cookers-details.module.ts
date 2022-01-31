import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookersDetailsRoutingModule } from './cookers-details-routing.module';
import { CookersDetailsComponent } from './cookers-details.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { IndividualCookerDishesModule } from '../individual-cooker-dishes/individual-cooker-dishes.module';


@NgModule({
  declarations: [CookersDetailsComponent],
  imports: [
    CommonModule,
    CookersDetailsRoutingModule,
    HeaderModule,
    FooterModule,
    IndividualCookerDishesModule
  ]
})
export class CookersDetailsModule { }
