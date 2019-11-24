import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/root-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { ObsolescenceReportingStoreModule } from './obsolescence-reporting-store/obsolescence-reporting-store.module';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    ObsolescenceReportingStoreModule
  ]
})
export class RootStoreModule { }
