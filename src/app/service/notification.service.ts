import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public http:HttpClient) { }
   /**Nombre de notification */
   getNombrePresence($id) {
    return this.http.get(SERVER_URL+"notification_presence/"+$id);
  }
}
