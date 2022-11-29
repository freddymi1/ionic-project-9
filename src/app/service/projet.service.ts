import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Collaborator } from '../model/collaborator.model';
import { SERVER_URL } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public http:HttpClient) { }
   /**Liste des collaborateurs */
   projet: Projet[] = [];
   collaborator : Collaborator[] = [];
   id = localStorage.getItem('id');
   getListProject(): Observable<Projet[]> {
     return this.http.get<Projet[]>(SERVER_URL+"liste_projet_etp/"+this.id)
   }
   getDetailProject(groupe_id): Observable<Projet[]> {
    return this.http.get<Projet[]>(SERVER_URL+"detail_projet/"+groupe_id)
  }
  getPresenceProject(groupe_id): Observable<Projet[]> {
    return this.http.get<Projet[]>(SERVER_URL+"presence/"+groupe_id)
  }
  getInfoGroupe(groupe_id): Observable<Projet[]> {
    return this.http.get<Projet[]>(SERVER_URL+"info_groupe/"+groupe_id)
  }
  getParticipant(groupe_id): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(SERVER_URL+"participant_groupe/"+groupe_id)
  }
  /**presence par apprenant et par session */
  getPresenceApprenant(stagiaire_id,groupe_id): Observable<Projet[]> {
    return this.http.get<Projet[]>(SERVER_URL+"statistique_presence/"+stagiaire_id+"/"+groupe_id)
  }
  
  /**Projet du formateur */
  getListProjectFormateur(): Observable<Projet[]> {
    return this.http.get<Projet[]>(SERVER_URL+"liste_projet_formateur/"+this.id)
  }
  /**Projet a afficher dans agenda */agenda
  getAgendaEvent() {
    return this.http.get(SERVER_URL+"agenda/"+this.id)
  }
}
