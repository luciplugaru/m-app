import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SavedComponent } from './saved.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureModule } from '../shared/feature/feature.module';

@NgModule({
  imports: [
    SharedModule,
    FeatureModule,
    RouterModule
  ],
  declarations: [ SavedComponent ]
})
export class SavedModule {
}
