import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookersDetailsComponent } from './cookers-details.component';

const routes: Routes = [{ path: '', component: CookersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookersDetailsRoutingModule { }
