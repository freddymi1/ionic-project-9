import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { SERVER_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http:HttpClient,public router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  login(email:string,mdp:string){
    return this.http.get(SERVER_URL+"login/"+email+"/"+mdp);
  }

  register(name:string,prenom_emp:string,email:string,cin:string,password:string,matricule_emp:string,nom_etp:string,nif:string,logo:string,type_entreprise_id:string) {
    let imput={
      'name':name,
      'prenom_emp':prenom_emp,
      'email' :  email,
      'cin' : cin,
      'password': password,
      'matricule_emp' : matricule_emp,
      'nom_etp' : nom_etp,
      'nif' : nif,
      'logo' : logo,
      'type_entreprise_id' : type_entreprise_id

    };
    return this.http.post(SERVER_URL+"register",imput,this.httpOptions);
  }
}