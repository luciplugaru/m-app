import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { imageSrc, settings } from '../shared/settings';
import { ExtendedFeature } from '../shared/interfaces';
import { ViewerService } from './viewer.service';
import { StorageHelper } from '../shared/storage.helper';

@Component({
  templateUrl: './viewer.component.html',
  styleUrls: [ './viewer.component.css' ]
})
export class ViewerComponent implements OnInit {
  features: ExtendedFeature[];
  activeFeature: ExtendedFeature;
  routeImageKey: string;
  loadingSequences: boolean;
  
  constructor(public viewerService: ViewerService,
              public route: ActivatedRoute,
              public router: Router) {
  }
  
  
  saveFeature(feature: ExtendedFeature) {
    StorageHelper.append('savedFeatures', feature);
    feature.saved = true;
    StorageHelper.set('features', this.features);
  }
  
  
  loadMoreFeatures() {
    this.loadingSequences = true;
    
    this.viewerService.getSequences(true)
      .subscribe(
        
        (data: any) => {
          data.features.map(feature => this.extendFeature(feature));
          this.features = [ ...this.features, ...data.features ];
          if (this.features.length <= (settings.numberOfStoredFeaturePages * settings.featuresPerPage)) {
            StorageHelper.set('features', this.features);
          }
          this.loadingSequences = false;
        },
        
        error => {
          console.log('ERROR: getting more sequences', error);
          this.loadingSequences = false;
        });
  }
  
  
  getUser(feature: ExtendedFeature) {
    if (!feature.user) {
      this.viewerService.getUser(feature.properties.user_key)
        .subscribe(
          
          user => {
            if (this.activeFeature.properties.key === feature.properties.key) {
              this.activeFeature.user = user;
            }
            
            this.features.map(f => {
              if (f.properties.key === feature.properties.key) {
                f.user = user;
                StorageHelper.set('features', this.features);
              }
            });
          },
          
          error => console.log('ERROR: getting user', error)
        );
    }
  }
  
  
  getImage(key: string) {
    this.viewerService.getImage(key)
      .subscribe(
        
        feature => {
          this.getUser(feature);
          this.activeFeature = feature;
        },
        
        error => {
          console.log('ERROR: getting image', error);
          this.router.navigate(['/page-not-found']);
        });
  }
  
  
  changeActiveFeature(feature) {
    if (feature) {
      this.getUser(feature);
      this.activeFeature = feature;
      this.router.navigate(
        [ './', { imageKey: feature.imageKey } ],
        { relativeTo: this.route }
        );
    }
  }
  
  
  initActiveFeature() {
    if (this.routeImageKey) {
      this.activeFeature = this.features.find(feature => feature.imageKey === this.routeImageKey);
      
      if (this.activeFeature) {
        this.getUser(this.activeFeature);
        
      } else {
        this.getImage(this.routeImageKey);
      }
      
    } else {
      this.changeActiveFeature(this.features[ 0 ]);
    }
  }
  
  
  extendFeature(feature) {
    const imageKey = feature.properties.coordinateProperties.image_keys[ 0 ];
    
    feature.imageKey = imageKey;
    feature.src = {
      thumb320: imageSrc.thumb320(imageKey),
      thumb640: imageSrc.thumb640(imageKey)
    };
  }
  
  
  initFeatures() {
    this.features = StorageHelper.get('features');
    
    if (this.features && this.features.length) {
      this.initActiveFeature();
      
    } else {
      this.loadingSequences = true;
      
      this.viewerService.getSequences()
        .subscribe(
          
          (data: any) => {
            data.features.map(feature => this.extendFeature(feature));
            this.features = data.features;
            this.initActiveFeature();
            StorageHelper.set('features', this.features);
            this.loadingSequences = false;
          },
          
          error => {
            console.log('ERROR: getting sequences', error);
            this.loadingSequences = false;
          }
        );
    }
  }
  
  
  ngOnInit() {
    console.log('ViewerComponent init');
    this.routeImageKey = this.route.snapshot.paramMap.get('imageKey');
    this.initFeatures();
  }
  
  
}
