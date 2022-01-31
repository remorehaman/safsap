import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookersFoodcategoryDishesComponent } from './cookers-foodcategory-dishes.component';

const routes: Routes = [{ path: '', component: CookersFoodcategoryDishesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookersFoodcategoryDishesRoutingModule { }
