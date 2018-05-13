import { Component, OnInit } from '@angular/core';

import { ExtendedFeature } from '../shared/interfaces';
import { StorageHelper } from '../shared/storage.helper';

@Component({
  templateUrl: './saved.component.html',
  styleUrls: [ './saved.component.css' ]
})
export class SavedComponent implements OnInit {
  savedFeatures: ExtendedFeature[];
  
  ngOnInit() {
    this.savedFeatures = StorageHelper.get('savedFeatures') || [];
  }
  
}
