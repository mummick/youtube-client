import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionsService {
  private filterStatus = false;

  private isFilter = new BehaviorSubject(this.filterStatus);

  public isFilter$ = this.isFilter.asObservable();

  toggleFilter() {
    this.filterStatus = !this.filterStatus;
    this.isFilter.next(this.filterStatus);
  }
}
