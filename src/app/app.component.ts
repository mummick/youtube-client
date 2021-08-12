import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  public title = 'youtube-client';

  public isFilter = false;

  toggleFilter() {
    this.isFilter = !this.isFilter;
  }
}
