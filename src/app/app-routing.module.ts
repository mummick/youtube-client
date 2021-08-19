import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './core/pages/blank/blank.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { DetailedPageComponent } from './youtube/pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'search/:query/:isFilter', component: MainPageComponent },
  { path: 'detailed/:id', component: DetailedPageComponent },
  { path: '', component: BlankComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
