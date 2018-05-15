import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapillary from 'mapillary-js';

import { ExtendedFeature } from '../interfaces';
import { mClientId } from '../settings';

@Component({
  selector: 'shared-feature',
  templateUrl: './feature.component.html',
  styleUrls: [ './feature.component.css' ]
})
export class FeatureComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() feature: ExtendedFeature;
  @Input() shortVersion: boolean;
  viewer: any;
  
  ngOnInit() {
    console.log('FeatureComponent init');
  }
  
  initMapillaryViewer() {
    this.viewer = new Mapillary.Viewer(
      'viewer',
      mClientId,
      this.feature.imageKey
    );
  }
  
  ngAfterViewInit() {
    this.initMapillaryViewer();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.feature && changes.feature.previousValue
        && changes.feature.currentValue.imageKey !== changes.feature.previousValue.imageKey) {
      this.initMapillaryViewer();
    }
  }
  
}
