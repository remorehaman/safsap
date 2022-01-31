import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MatMaterialComponents = [
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [ MatMaterialComponents ],
  exports: [ MatMaterialComponents ]

})
export class MaterialmoduleModule { }
