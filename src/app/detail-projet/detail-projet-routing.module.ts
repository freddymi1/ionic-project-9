import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProjetPage } from './detail-projet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProjetPageRoutingModule {}
