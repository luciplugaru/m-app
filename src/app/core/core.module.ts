import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';

@NgModule({
  imports: [ HttpClientModule ],
  declarations: [],
  providers: [
    HttpClient,
    HttpService
  ]
})
export class CoreModule {
}
