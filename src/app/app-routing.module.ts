import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './news-reader/component/dashboard/dashboard.component';
import { NewsDetailsComponent } from './news-reader/component/news-details/news-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
