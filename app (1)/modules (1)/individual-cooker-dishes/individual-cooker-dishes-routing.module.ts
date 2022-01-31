import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualCookerDishesComponent } from './individual-cooker-dishes.component';

const routes: Routes = [{ path: '', component: IndividualCookerDishesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualCookerDishesRoutingModule { }
