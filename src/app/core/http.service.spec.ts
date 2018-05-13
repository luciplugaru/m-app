import { inject, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        {provide: HttpClient, useValue: {}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });
  
  it('should be created', inject([ HttpService ], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
