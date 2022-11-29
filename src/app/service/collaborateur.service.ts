import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { Collaborator } from '../model/collaborator.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SERVER_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public http:HttpClient) { }


  /**Liste des collaborateurs */
  collaborators: Collaborator[] = [];
  id = localStorage.getItem('id');
  matricule : number;
  // getListCollaborator(): Observable<Collaborator[]> {
  //   return this.http.get<Collaborator[]>(SERVER_URL+"liste_collaborateur/"+this.id)
  //     .pipe(
  //       tap(collaborator => console.log(`Collaborator fetched: `)),
  //       catchError(this.handleError<Collaborator[]>(`Get Collaborator`,[]))
  //     );
  // }
  getListCollaborator(){
    return this.http.get<any>(SERVER_URL+"liste_collaborateur/"+this.id)
  }
  /**Profil du collaborateur selectionne */
  getCollaboratorProfil(matricule): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(SERVER_URL+"profil_employe/"+matricule)
  }
   /**Profil de l'utilisateur connecté */
   getUserProfil(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(SERVER_URL+"profil/"+this.id)
  }
  /**Recherche collaborateur par nom ou prenom */
  searchCollaborator(nom,entreprise_id): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(SERVER_URL+"recherche_collaborateur/"+nom+"/"+entreprise_id)
  }
  getNombreFormation(employe_id) {
    return this.http.get(SERVER_URL+"formation_stagiaire/"+employe_id)
  }
  getStagiaireFormation(matricule_emp) {
    return this.http.get(SERVER_URL+"liste_projets/"+matricule_emp)
  }
  getPresence(matricule_emp){
    return this.http.get(SERVER_URL+"liste_presence/"+matricule_emp)
  }
}
