import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInfoModulesComponent } from './user-info-modules.component';

const routes: Routes = [{ path: '', component: UserInfoModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoModulesRoutingModule { }
