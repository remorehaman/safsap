import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodListRoutingModule } from './food-list-routing.module';
import { FoodListComponent } from './food-list.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialmoduleModule } from 'src/app/materialmodule/materialmodule/materialmodule.module';





@NgModule({
  declarations: [FoodListComponent],
  imports: [
    CommonModule,
    FoodListRoutingModule,
    HeaderModule,
    FooterModule,
    MaterialmoduleModule
  ]
  
})
export class FoodListModule { }
