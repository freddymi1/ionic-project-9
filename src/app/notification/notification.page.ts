import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

   
  constructor(public navCtrl: NavController,private menu: MenuController, public notifications:NotificationService) { }

  ngOnInit() {
    this.notification();
  }
  user_id = localStorage.getItem('id');
  notification_presence : any;
  nombre_notification : number;
  notification(){
      this.notifications.getNombrePresence(this.user_id).subscribe((result:any) => {
          this.notification_presence = result.presence;
          this.nombre_notification = this.notification_presence.length;
      })  
  }
}
