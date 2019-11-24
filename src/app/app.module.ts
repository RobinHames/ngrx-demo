import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { ObsolescenceReportComponent } from './containers/obsolescence-report/obsolescence-report.component';
@NgModule({
  declarations: [
    AppComponent,
    ObsolescenceReportComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
