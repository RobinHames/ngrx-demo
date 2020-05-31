import { Component, OnInit } from '@angular/core';
import { ObsolescenceReportingStoreService } from 'src/app/root-store/facade/obsolescence-reporting-store.service';

@Component({
  selector: 'app-obsolescence-report',
  templateUrl: './obsolescence-report.component.html',
  styleUrls: ['./obsolescence-report.component.scss']
})
export class ObsolescenceReportComponent implements OnInit {

  gscApplications$ = this.storeFacade.gscApplications$;

  constructor(private storeFacade: ObsolescenceReportingStoreService) { }

  ngOnInit() {
    this.storeFacade.LoadObsolescenceReportingStore();
  }

}
