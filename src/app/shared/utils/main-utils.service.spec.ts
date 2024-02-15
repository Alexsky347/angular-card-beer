import { TestBed } from '@angular/core/testing';

import { MainUtilsService } from './main-utils.service';

describe('MainUtilsService', () => {
  let service: MainUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
