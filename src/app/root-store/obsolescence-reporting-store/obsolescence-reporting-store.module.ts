import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromObsolescenceReportingStore from './reducers/obsolescence-reporting-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ObsolescenceReportingStoreEffects } from './effects/obsolescence-reporting-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('obsolescenceReportingStore', fromObsolescenceReportingStore.reducer),
    EffectsModule.forFeature([ObsolescenceReportingStoreEffects])
  ]
})
export class ObsolescenceReportingStoreModule { }
