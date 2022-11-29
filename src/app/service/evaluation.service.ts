import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public http:HttpClient) { }

  getCompetence(module_id,groupe_id,stagiaire_id) {
    return this.http.get(SERVER_URL+"liste_competence_module/"+module_id+"/"+groupe_id+"/"+stagiaire_id)
  }
  evaluation(comp,groupe_id,stagiaire_id,note,status,validation_globale){
    let input={
      'comp':comp,
      'groupe_id':groupe_id,
      'stagiaire_id':stagiaire_id,
      'note' : note,
      'status' : status,
      'validation_globale' : validation_globale
    };
    return this.http.post(SERVER_URL+"insert_evaluation_stagiaire",input,this.httpOptions);
  }
  /**HIstorique evaluatin par stagiaire et par groupe */
  historique_evaluation(stagiaire_id,groupe_id){
    return this.http.get(SERVER_URL+"historique_evaluation/"+stagiaire_id+"/"+groupe_id)
  }
}
