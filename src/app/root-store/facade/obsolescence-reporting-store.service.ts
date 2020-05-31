import { Injectable } from '@angular/core';
import { RootStoreModule } from '..';
import { ObsolescenceReportingStoreState } from '../obsolescence-reporting-store';
import { Store } from '@ngrx/store';
import { selectAllMyFeatureItems } from '../obsolescence-reporting-store/selectors/obsolescence-reporting-store.selector';
import { LoadObsolescenceReportingStoreRequestAction } from '../obsolescence-reporting-store/actions/obsolescence-reporting-store.actions';

@Injectable({
  providedIn: RootStoreModule
})
export class ObsolescenceReportingStoreService {

  constructor(private store: Store<ObsolescenceReportingStoreState.State>) { }

  public gscApplications$ = this.store.select(selectAllMyFeatureItems);

  public LoadObsolescenceReportingStore() {
    this.store.dispatch(new LoadObsolescenceReportingStoreRequestAction());
  }
}
