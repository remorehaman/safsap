import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodcategoryRoutingModule } from './foodcategory-routing.module';
import { FoodcategoryComponent } from './foodcategory.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [FoodcategoryComponent],
  imports: [
    CommonModule,
    FoodcategoryRoutingModule,
    HeaderModule,
    FooterModule,
   
  ]
})
export class FoodcategoryModule { }
