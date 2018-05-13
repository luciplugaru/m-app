import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ FeatureComponent ],
  exports: [ FeatureComponent ]
})
export class FeatureModule { }
