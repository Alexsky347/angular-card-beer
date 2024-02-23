import { TestBed } from '@angular/core/testing';

import { BeersApiService } from './beers-api.service';

describe('BeersApiService', () => {
  let service: BeersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
