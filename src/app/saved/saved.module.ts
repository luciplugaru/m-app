import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { SavedComponent } from './saved.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CardComponent,
    SavedComponent
  ]
})
export class SavedModule {
}
