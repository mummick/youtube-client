import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'search/:query',
    component: MainPageComponent,
  },
  {
    path: 'detailed/:id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
