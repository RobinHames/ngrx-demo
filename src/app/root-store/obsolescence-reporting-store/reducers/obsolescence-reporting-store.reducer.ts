import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ObsolescenceReportingStoreActions, ObsolescenceReportingStoreActionTypes } from '../actions/obsolescence-reporting-store.actions';
import { GscApplication } from 'src/app/models/gsc-application';

export const featureAdapter: EntityAdapter<GscApplication> = createEntityAdapter<GscApplication>({
  selectId: model => model.id,
  sortComparer: (a, b): number =>
    a.name.localeCompare(b.name.toString())
});

export interface State extends EntityState<GscApplication> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});

export function reducer(state = initialState, action: ObsolescenceReportingStoreActions): State {
  switch (action.type) {

    case ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreSuccess:
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });

    case ObsolescenceReportingStoreActionTypes.LoadObsolescenceReportingStoreFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
