import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ViewerComponent } from './viewer.component';
import { ViewerService } from './viewer.service';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  const ViewerServiceStub = {
    getSequences: () => of([]),
    getImage: key => of({}),
    getUser: key => of({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ViewerService, useValue: ViewerServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
