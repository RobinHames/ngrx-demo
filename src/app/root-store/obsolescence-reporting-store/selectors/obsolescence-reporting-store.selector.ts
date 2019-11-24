import { State, featureAdapter } from '../reducers/obsolescence-reporting-store.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GscApplication } from 'src/app/models/gsc-application';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectMyFeatureState = createFeatureSelector<State>('obsolescenceReportingStore');

export const selectAllMyFeatureItems: (state: object) => GscApplication[] = featureAdapter.getSelectors(selectMyFeatureState).selectAll;

export const selectMyFeatureById = (id: string) => createSelector(
    this.selectAllMyFeatureItems,
    (allMyFeatures: GscApplication[]) => {
      if (allMyFeatures) {
        return allMyFeatures.find(p => p.id === id);
      } else {
        return null;
      }
    }
  );

export const selectMyFeatureError = createSelector(
  selectMyFeatureState,
  getError
);

export const selectMyFeatureIsLoading = createSelector(
  selectMyFeatureState,
  getIsLoading
);
