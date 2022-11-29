import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetFormateurPage } from './projet-formateur.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetFormateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetFormateurPageRoutingModule {}
