import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'collaborator/:id',
    loadChildren: () => import('./collaborator/collaborator.module').then( m => m.CollaboratorPageModule)
  },
  {
    path: 'list-collaborator',
    loadChildren: () => import('./list-collaborator/list-collaborator.module').then( m => m.ListCollaboratorPageModule)
  },
  {
    path: 'projet',
    loadChildren: () => import('./projet/projet.module').then( m => m.ProjetPageModule)
  },
  {
    path: 'detail-projet/:id',
    loadChildren: () => import('./detail-projet/detail-projet.module').then( m => m.DetailProjetPageModule)
  },
  {
    path: 'emargement/:id',
    loadChildren: () => import('./emargement/emargement.module').then( m => m.EmargementPageModule)
  },
  {
    path: 'apprenant-groupe/:id',
    loadChildren: () => import('./apprenant-groupe/apprenant-groupe.module').then( m => m.ApprenantGroupePageModule)
  },
  {
    path: 'projet-formateur',
    loadChildren: () => import('./projet-formateur/projet-formateur.module').then( m => m.ProjetFormateurPageModule)
  },
  
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'evaluation-apprenant/:id/:module_id/:groupe_id',
    loadChildren: () => import('./evaluation-apprenant/evaluation-apprenant.module').then( m => m.EvaluationApprenantPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'scan-qr-code/:id',
    loadChildren: () => import('./scan-qr-code/scan-qr-code.module').then( m => m.ScanQrCodePageModule)
  },
  {
    path: 'resultat-apprenant/:id/:groupe_id', 
    loadChildren: () => import('./resultat-apprenant/resultat-apprenant.module').then( m => m.ResultatApprenantPageModule)
  },
  {
    path: 'emargement-apprenant/:id/:groupe_id',
    loadChildren: () => import('./emargement-apprenant/emargement-apprenant.module').then( m => m.EmargementApprenantPageModule)
  },  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
