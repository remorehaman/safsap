import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from '../footer/footer.module';
import { CustomlinkRoutingModule} from './customlink-routing.module';
import { CustomlinkComponent } from './customlink/customlink.component';
@NgModule({
    declarations: [CustomlinkComponent],
    imports:[
        CommonModule,
        CustomlinkRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class CustomlinkModule{}