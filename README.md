# AngularNgrxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18 and uses nrx 7.4.0.

## Step by step development

1. Create project by running `ng new angular-ngrx-demo`
2. Install ngrx 7.4.0 `npm install @ngrx/store@7.4.0 @ngrx/store-devtools@7.4.0 @ngrx/effects@7.4.0 @ngrx/router-store@7.4.0 @ngrx/entity@7.4.0 @ngrx/schematics@7.4.0`
3. Add @ngrx/schematics as default collection in angular.json `ng config cli.defaultCollection @ngrx/schematics`
4. Create ngrx root module `ng g module root-store --flat false --module app.module.ts`
5. Generate root-state interface `ng generate store root-store/State --root --statePath store --module root-store.module.ts`
6. Create feature module in root module 
```
ng g module root-store/obsolescence-reporting-store --flat false --module root-store/root-store.module.ts
ng generate feature root-store/obsolescence-reporting-store/obsolescence-reporting-store -m root-store/obsolescence-reporting-store/obsolescence-reporting-store.module.ts --group
```
7. Generate an entity (n.b. at app level in models subfolder) `ng generate class models/gsc-application --skipTests=true`
8. Generate a service (n.b. at app level in services subfolder) `ng g service services/application`
9. Edit feature module actions, reducers and effects
10. Add selectors folder and selector.ts file
11. Generate container (n.b. at app level in containers subfolder) `ng generate container containers/ObsolescenceReport --state ../root-store/obsolescence-reporting-store/reducers/obsolescence-reporting-store.reducer.ts`

## module.ts files
### app.module.ts
```
import { RootStoreModule } from './root-store/root-store.module';
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
```

### root-store.module.ts
```
import { reducers, metaReducers } from './store/root-store';
import { ObsolescenceReportingStoreModule } from './obsolescence-reporting-store/obsolescence-reporting-store.module';

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
```

### obsolescence-reporting-store.module.ts
```
import * as fromObsolescenceReportingStore from './reducers/obsolescence-reporting-store.reducer';
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
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Useful sites

https://v7.ngrx.io/guide/store
https://dzone.com/articles/angular-app-state-management-with-ngrx
https://www.intertech.com/Blog/ngrx-tutorial-add-state-to-feature-module/
https://angular.io/cli/generate
