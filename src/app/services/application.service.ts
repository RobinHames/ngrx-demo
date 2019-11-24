import { Injectable } from '@angular/core';
import { GscApplication } from '../models/gsc-application';
import { Observable, of } from 'rxjs';
import { GSC_APPLICATIONS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getGscApplications(): Observable<GscApplication[]> {
    return of(GSC_APPLICATIONS);
  }
}
