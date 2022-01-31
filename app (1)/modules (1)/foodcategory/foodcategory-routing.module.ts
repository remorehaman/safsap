import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from '../food-list/food-list.component';

import { FoodcategoryComponent } from './foodcategory.component';

const routes: Routes = [
  { path: '', component: FoodcategoryComponent },
  // { path: 'cat_slug', component: FoodListComponent },
  // { path: 'cat_id', component: FoodListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodcategoryRoutingModule { }
