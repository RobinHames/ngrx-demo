import { TestBed } from '@angular/core/testing';

import { ObsolescenceReportingStoreService } from './obsolescence-reporting-store.service';

describe('ObsolescenceReportingStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObsolescenceReportingStoreService = TestBed.get(ObsolescenceReportingStoreService);
    expect(service).toBeTruthy();
  });
});
