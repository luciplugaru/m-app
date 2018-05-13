import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SavedModule } from './saved/saved.module';
import { ViewerModule } from './viewer/viewer.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    ViewerModule,
    SavedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
