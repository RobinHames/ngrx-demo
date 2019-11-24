import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
// tslint:disable-next-line: max-line-length
import { ObsolescenceReportingStoreActionTypes, ObsolescenceReportingStoreActions, LoadObsolescenceReportingStoreSuccessAction, LoadObsolescenceReportingStoreFailureAction } from '../actions/obsolescence-reporting-store.actions';
import { ApplicationService } from 'src/app/services/application.service';

@Injectable()
export class ObsolescenceReportingStoreEffects {

  @Effect()
  loadObsolescenceReportingStores$ = this.actions$.pipe(
    ofType(ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreRequest),
    concatMap(() =>
      this.applicationService.getGscApplications().pipe(
        map(items => new LoadObsolescenceReportingStoreSuccessAction({items})),
        catchError(err => of(new LoadObsolescenceReportingStoreFailureAction({error: err})))
      )
    )
  );

  constructor(private actions$: Actions<ObsolescenceReportingStoreActions>, private applicationService: ApplicationService) {}

}
