import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToCartRoutingModule } from './add-to-cart-routing.module';
import { AddToCartComponent } from './add-to-cart.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule,
    AddToCartRoutingModule,
    HeaderModule,
    FooterModule

  ]
})
export class AddToCartModule { }
