import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmargementPage } from './emargement.page';

const routes: Routes = [
  {
    path: '',
    component: EmargementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmargementPageRoutingModule {}
