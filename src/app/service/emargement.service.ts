import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SERVER_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmargementService {

  constructor(public http:HttpClient) { }
  MakePresence($detail_id,$stagiaire_id){
    return this.http.get(SERVER_URL+"presence_badge/"+$detail_id+"/"+$stagiaire_id);
  }
}
