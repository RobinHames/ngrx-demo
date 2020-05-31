import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ObsolescenceReportingStoreEffects } from './obsolescence-reporting-store.effects';

describe('ObsolescenceReportingStoreEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>;
  let effects: ObsolescenceReportingStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ObsolescenceReportingStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ObsolescenceReportingStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
