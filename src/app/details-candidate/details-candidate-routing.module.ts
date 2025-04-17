import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCandidatePage } from './details-candidate.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCandidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCandidatePageRoutingModule {}
