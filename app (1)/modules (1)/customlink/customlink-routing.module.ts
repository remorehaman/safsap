import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomlinkComponent} from './customlink/customlink.component';

const routes: Routes = [
    {
      path:'',
      component: CustomlinkComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomlinkRoutingModule{}