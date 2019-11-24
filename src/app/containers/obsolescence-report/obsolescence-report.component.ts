import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../root-store/obsolescence-reporting-store/reducers/obsolescence-reporting-store.reducer';
import { GscApplication } from 'src/app/models/gsc-application';
import { Observable } from 'rxjs';
import { selectAllMyFeatureItems } from 'src/app/root-store/obsolescence-reporting-store/selectors/obsolescence-reporting-store.selector';
// tslint:disable-next-line: max-line-length
import { LoadObsolescenceReportingStoreRequestAction } from 'src/app/root-store/obsolescence-reporting-store/actions/obsolescence-reporting-store.actions';

@Component({
  selector: 'app-obsolescence-report',
  templateUrl: './obsolescence-report.component.html',
  styleUrls: ['./obsolescence-report.component.css']
})
export class ObsolescenceReportComponent implements OnInit {

  gscApplications$: Observable<GscApplication[]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.gscApplications$ = this.store.select(selectAllMyFeatureItems);
    this.store.dispatch(new LoadObsolescenceReportingStoreRequestAction());
  }

}
