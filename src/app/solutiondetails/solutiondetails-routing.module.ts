import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutiondetailsPage } from './solutiondetails.page';

const routes: Routes = [
  {
    path: '',
    component: SolutiondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutiondetailsPageRoutingModule {}
