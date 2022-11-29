import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  loading:any;
  msg:string;
  error:string;
  filename: string = '' ;
  registerData = {name:'',prenom_emp:'',email:'',cin:'',password:'',matricule_emp:'',nom_etp:'',nif:'',logo:'',type_entreprise_id:''};
  constructor( public authService: AuthServiceService) {}


  onFileSelected(event){
    let file = event.target.files[0];
    this.filename= file.name;
  }

  doRegistration() {

    if(this.registerData.name.length == 0)   this.msg = "Vous devez entrer votre nom";
    else if(this.registerData.prenom_emp.length == 0 ) this.msg = "Vous devez entrer votre prénom";
    else if(this.registerData.email.length == 0 ) this.msg = "Vous devez entrer votre adresse e-mail";
    else if(this.registerData.cin.length == 0 ) this.msg = "Vous devez entrer votre CIN";
    else if(this.registerData.password.length == 0 ) this.msg = "Vous devez entrer votre mot de passe";
    else if(this.registerData.matricule_emp.length == 0 ) this.msg = "Vous devez entrer votre matricule";
    else if(this.registerData.nom_etp.length == 0 ) this.msg = "Vous devez entrer le nom de votre organisation";
    else if(this.registerData.nif.length == 0 ) this.msg = "Vous devez entrer votre NIF";
    else if(this.filename.length == 0 ) this.msg = "Vous devez entrer votre logo";
    else if(this.registerData.type_entreprise_id.length == 0 ) this.msg = "Vous devez choisir votre type d'organisation";
    else{

     //this.showLoader();
      // this.authService.register(this.registerData.name,this.registerData.prenom_emp,this.registerData.email,this.registerData.cin,this.registerData.password,this.registerData.matricule_emp,this.registerData.nom_etp,this.registerData.nif,this.filename,this.registerData.type_entreprise_id).subscribe(data => {
      //   // this.authService.login().then(
      //   //   data => {
      //   //   },
      //   //   error => {
      //   //     console.log(error);
      //   //   },
      //   //   () => {
      //   //     // this.dismissRegister();
      //   //     // this.navCtrl.navigateRoot('/dashboard');
      //   //   }
      //   // );
      //   // this.alertService.presentToast(data['message']);
      // },
      // error => {
      //   console.log(error);
      // },
      // () => {
       }
    // );
  }


  ngOnInit() {
  }

}
