import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { SavedComponent } from '../saved/saved.component';
import { SharedModule } from '../shared/shared.module';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    SavedComponent,
    ViewerComponent
  ]
})
export class HomeModule {
}
