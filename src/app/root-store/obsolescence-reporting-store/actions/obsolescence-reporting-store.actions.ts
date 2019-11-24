import { Action } from '@ngrx/store';
import { GscApplication } from 'src/app/models/gsc-application';

export enum ObsolescenceReportingStoreActionTypes {
  LoadObsolescenceReportingStoreRequest = '[ObsolescenceReportingStore] Load ObsolescenceReportingStoreRequest',
  LoadObsolescenceReportingStoreSuccess = '[ObsolescenceReportingStore] Load ObsolescenceReportingStoreSuccess',
  LoadObsolescenceReportingStoreFailure = '[ObsolescenceReportingStore] Load ObsolescenceReportingStoreFailure'
}

export class LoadObsolescenceReportingStoreRequestAction implements Action {
  readonly type = ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreRequest;
}

export class LoadObsolescenceReportingStoreSuccessAction implements Action {
  readonly type = ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreSuccess;
  constructor(public payload: {items: GscApplication[]}) {}
}

export class LoadObsolescenceReportingStoreFailureAction implements Action {
  readonly type = ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreFailure;
  constructor(public payload: {error: any}) {}
}

export type ObsolescenceReportingStoreActions =
  LoadObsolescenceReportingStoreRequestAction | LoadObsolescenceReportingStoreSuccessAction | LoadObsolescenceReportingStoreFailureAction;
