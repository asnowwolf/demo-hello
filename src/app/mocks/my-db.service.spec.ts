import { TestBed } from '@angular/core/testing';

import { MyDbService } from './my-db.service';

describe('MyDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDbService = TestBed.get(MyDbService);
    expect(service).toBeTruthy();
  });
});
