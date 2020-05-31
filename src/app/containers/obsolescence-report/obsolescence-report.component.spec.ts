import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsolescenceReportComponent } from './obsolescence-report.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ObsolescenceReportComponent', () => {
  let component: ObsolescenceReportComponent;
  let fixture: ComponentFixture<ObsolescenceReportComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ObsolescenceReportComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsolescenceReportComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
