import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ObsolescenceReportingStoreState } from '../obsolescence-reporting-store';

export interface State {
  ObsolescenceReportingStore: ObsolescenceReportingStoreState.State;
}

export const reducers: ActionReducerMap<State> = {
  ObsolescenceReportingStore: ObsolescenceReportingStoreState.reducer
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
