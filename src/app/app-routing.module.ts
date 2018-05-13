import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SavedComponent } from './saved/saved.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  { path: 'viewer', component: ViewerComponent },
  { path: 'saved', component: SavedComponent },
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

