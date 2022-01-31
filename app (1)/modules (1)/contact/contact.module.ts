import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from '../footer/footer.module';
import { ContactRoutingModule} from './contact.routing.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
