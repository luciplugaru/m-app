import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Feature, FeatureCollection, User } from '../shared/interfaces';
import { mClientId, settings, urls } from '../shared/settings';
import { HttpService } from '../core/http.service';

@Injectable()
export class ViewerService {
  constructor(private httpService: HttpService) {
  }
  
  getSequences(nextPage?: boolean): Observable<FeatureCollection> {
    const params: any = {
      'max-lat': 90,
      'max-lon': 180,
      'min-lat': -90,
      'min-lon': -180,
      'per_page': settings.featuresPerPage,
      'starred': true,
      'client_id': mClientId
    };
    
    if (nextPage) {
      params.next = true;
    }
    return this.httpService.get(urls.getSequences, params, 'get sequences');
  }
  
  getImage(key): Observable<Feature> {
    return this.httpService.get(urls.getImage(key), {
      'client_id': mClientId
    });
  }
  
  getUser(key): Observable<User> {
    return this.httpService.get(urls.getUser(key), {
      'client_id': mClientId
    });
  }
}
