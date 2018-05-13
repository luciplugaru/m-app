import { Component, Input, OnInit } from '@angular/core';

import { ExtendedFeature } from '../interfaces';

@Component({
  selector: 'shared-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input() feature: ExtendedFeature;
  @Input() shortVersion: boolean;
  
  ngOnInit() {
    console.log('FeatureComponent init');
  }
  
}
