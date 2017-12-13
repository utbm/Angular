import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCreationComponent } from './lespages/page-creation/page-creation.component';
import { PageHomeComponent } from './lespages/page-home/page-home.component';
import { PageListComponent } from './lespages/page-list/page-list.component';
import { PageVisualisationComponent } from './lespages/page-visualisation/page-visualisation.component';

const routes: Routes = [
  {path: "", component: PageHomeComponent},
  {path: "home", component: PageHomeComponent},
  {path: "list", component: PageListComponent},
  {path: "create", component: PageCreationComponent},
  {path: "view", component: PageVisualisationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
