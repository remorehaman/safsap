import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookersFoodcategoryDishesRoutingModule } from './cookers-foodcategory-dishes-routing.module';
import { CookersFoodcategoryDishesComponent } from './cookers-foodcategory-dishes.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { IndividualCookerDishesModule } from '../individual-cooker-dishes/individual-cooker-dishes.module';


@NgModule({
  declarations: [CookersFoodcategoryDishesComponent],
  imports: [
    CommonModule,
    CookersFoodcategoryDishesRoutingModule,
    HeaderModule,
    FooterModule,
    IndividualCookerDishesModule
  ]
})
export class CookersFoodcategoryDishesModule { }
