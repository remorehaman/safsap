import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from '../footer/footer.module'
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select'
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ]
})
export class SignupModule { }
