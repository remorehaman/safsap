import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookersFullMenuRoutingModule } from './cookers-full-menu-routing.module';
import { CookersFullMenuComponent } from './cookers-full-menu.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { IndividualCookerDishesModule } from '../individual-cooker-dishes/individual-cooker-dishes.module';


@NgModule({
  declarations: [CookersFullMenuComponent],
  imports: [
    CommonModule,
    CookersFullMenuRoutingModule,
    HeaderModule,
    FooterModule,
    IndividualCookerDishesModule
  ]
})
export class CookersFullMenuModule { }
