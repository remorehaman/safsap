import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from '../footer/footer.module'
import { CarouselModule } from 'ngx-owl-carousel-o';

import { IndexPageRoutingModule } from './index-page-routing.module';
import { IndexComponent } from './index/index.component';
import { CookerNearbyComponent } from './cooker-nearby/cooker-nearby.component';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';




@NgModule({
  declarations: [IndexComponent, CookerNearbyComponent, PopularCategoriesComponent],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    CarouselModule,
    HeaderModule,
    FooterModule,

  ]
})
export class IndexPageModule { }
