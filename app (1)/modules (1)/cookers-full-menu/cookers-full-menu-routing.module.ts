import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookersFullMenuComponent } from './cookers-full-menu.component';

const routes: Routes = [{ path: '', component: CookersFullMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookersFullMenuRoutingModule { }
