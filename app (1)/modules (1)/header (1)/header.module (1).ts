import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
