import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../model/formateur.model';
import { SERVER_URL } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public http:HttpClient) { }
  /**Information sur le profil du formateur */
  formateur: Formateur[] = [];
  id = localStorage.getItem('id');
  matricule : number;
  getProfilFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(SERVER_URL+"profil_formateur/"+this.id)
  }

}
