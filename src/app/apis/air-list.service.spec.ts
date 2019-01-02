import { TestBed } from '@angular/core/testing';

import { AirListApi } from './air-list-api.service';

describe('AirListApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirListApi = TestBed.get(AirListApi);
    expect(service).toBeTruthy();
  });
});
