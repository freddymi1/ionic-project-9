import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NavController, LoadingController } from '@ionic/angular';
import { RegistrationPageRoutingModule } from '../registration/registration-routing.module';
import { RegistrationPage } from '../registration/registration.page';
import { HomePage } from '../home/home.page';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading:any;
  loginData = {email : '', password : ''};

  data:any;
  msg:string;
  error:string;
  role:string;
  erreur:any;
  tokenExpirer;
  constructor(public navCtrl: NavController,private router:Router, public authService: AuthServiceService, public loadingCtrl: LoadingController,private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
   
  }

  showLoading() {  
    this.loadingCtrl.create({ message: 'Connexion.....'  }).then((loading) => {   
        loading.present();{
      } 
       setTimeout(() => {   
         loading.dismiss();  
       }, 1000 );   
      });  
    } 
  doLogin() {
    if(this.loginData.email.length == 0)   this.msg = "Vous devez entrer votre adresse e-mail";
    else if(this.loginData.password.length == 0 ) this.msg = "Vous devez entrer votre mot de passe";
    else{
       this.showLoading();
      this.authService.login(this.loginData.email,this.loginData.password).subscribe((result:any) => {
        if(result.connected.name == null || result.connected.token == null){
      
          this.tokenExpirer=null;
          this.msg = result.message;
        } 
        else{
          if(result.role.role_id == "2"){
     
            localStorage.setItem('id',result.role.user_id);
            localStorage.setItem('role',result.role.role_id);
            localStorage.setItem('token',result.connected.token);
            this.navCtrl.navigateRoot('/list-collaborator');
          }
          if (result.role.role_id  == "4"){
            localStorage.setItem('id',result.role.user_id);
            localStorage.setItem('role',result.role.role_id);
            localStorage.setItem('token',result.connected.token);
            this.navCtrl.navigateRoot('/projet-formateur');
          }
        }
      }, (err) => {
       this.msg = JSON.stringify(err);
        this.error = JSON.stringify(err);
      });
    }

  }
  // register() {
  // //  / this.navCtrl.push(RegistrationPage);
  // }
}