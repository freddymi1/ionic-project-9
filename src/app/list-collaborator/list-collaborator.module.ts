import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCollaboratorPageRoutingModule } from './list-collaborator-routing.module';

import { ListCollaboratorPage } from './list-collaborator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCollaboratorPageRoutingModule
  ],
  declarations: [ListCollaboratorPage]
})
export class ListCollaboratorPageModule {}

