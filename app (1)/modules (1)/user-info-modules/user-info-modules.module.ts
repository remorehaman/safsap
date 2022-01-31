import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoModulesRoutingModule } from './user-info-modules-routing.module';
import { UserInfoModulesComponent } from './user-info-modules.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [UserInfoModulesComponent],
  imports: [
    CommonModule,
    UserInfoModulesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class UserInfoModulesModule { }
