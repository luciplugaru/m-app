import { inject, TestBed } from '@angular/core/testing';

import { ViewerService } from './viewer.service';
import { HttpClient } from '@angular/common/http';

describe('ViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewerService,
        { provide: HttpClient, useValue: {} }
      ]
    });
  });
  
  it('should be created', inject([ ViewerService ], (service: ViewerService) => {
    expect(service).toBeTruthy();
  }));
});
