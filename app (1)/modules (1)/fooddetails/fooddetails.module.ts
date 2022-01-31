import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooddetailsRoutingModule } from './fooddetails-routing.module';
import { FooddetailsComponent } from './fooddetails.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialmoduleModule } from 'src/app/materialmodule/materialmodule/materialmodule.module';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';






@NgModule({
  declarations: [FooddetailsComponent],
  imports: [
    CommonModule,
    FooddetailsRoutingModule,
    HeaderModule,
    FooterModule,
    MaterialmoduleModule
    //MatProgressSpinnerModule
    
  ]
})
export class FooddetailsModule { }
