import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprenantGroupePage } from './apprenant-groupe.page';

const routes: Routes = [
  {
    path: '',
    component: ApprenantGroupePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantGroupePageRoutingModule {}
