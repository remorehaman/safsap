import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCookerDishesRoutingModule } from './individual-cooker-dishes-routing.module';
import { IndividualCookerDishesComponent } from './individual-cooker-dishes.component';


@NgModule({
  declarations: [IndividualCookerDishesComponent],
  imports: [
    CommonModule,
    IndividualCookerDishesRoutingModule
  ],
  exports: [IndividualCookerDishesComponent]
})
export class IndividualCookerDishesModule { }
