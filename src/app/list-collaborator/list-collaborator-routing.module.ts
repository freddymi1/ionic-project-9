import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCollaboratorPage } from './list-collaborator.page';

const routes: Routes = [
  {
    path: '',
    component: ListCollaboratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCollaboratorPageRoutingModule {}
