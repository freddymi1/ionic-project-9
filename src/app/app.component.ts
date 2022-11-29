import { NotificationService } from './service/notification.service';
import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  nombre : any;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  user_id = localStorage.getItem('id');
  role_id = localStorage.getItem('role');

 
  constructor(public navCtrl: NavController,private menu: MenuController, public notifications:NotificationService) { }
 
    openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit(){
    this.nombre_notification();
  }
  liste_collaborateur() {
    this.navCtrl.navigateRoot('/list-collaborator');
  }
  liste_projet(){
    if(localStorage.getItem('role') == '2') this.navCtrl.navigateRoot('/projet');
    if(localStorage.getItem('role') == '4') this.navCtrl.navigateRoot('/projet-formateur');
  }
  profil(){
    this.navCtrl.navigateRoot('/profil');
  }
  agenda(){
    this.navCtrl.navigateRoot('/agenda');
  }
  deconnexion(){
    localStorage.setItem('id', '');
    localStorage.setItem('role', '');
    localStorage.setItem('token', '');
    window.location.assign('/');
  }
  nombre_notification(){
    this.notifications.getNombrePresence(this.user_id).subscribe((result:any) => {
      this.nombre = result.nombre;
    })
  }
  notification(){
    this.navCtrl.navigateRoot('/notification');
  }
}
