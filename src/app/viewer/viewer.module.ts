import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatureModule } from '../shared/feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { ViewerComponent } from './viewer.component';
import { ViewerService } from './viewer.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    FeatureModule
  ],
  declarations: [
    ViewerComponent
  ],
  providers: [ ViewerService ]
})
export class ViewerModule { }
