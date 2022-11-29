import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { CollaborateurService } from '../service/collaborateur.service';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';



@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.page.html',
  styleUrls: ['./list-collaborator.page.scss'],
})
export class ListCollaboratorPage implements OnInit {
  Collaborator: any = [];
  // public
  imageUrl : any;
  base64data;
  User : any = [];
  constructor(private localNotifications: LocalNotifications,private router: Router,private activatedRoute: ActivatedRoute,public navCtrl: NavController, public collabService: CollaborateurService, public loadingCtrl: LoadingController) {}
  id : number;
  entreprise_id : number;

  ngOnInit() {
    this.getCollaborator();
    this.getEntrepriseId();
 
  }
  getEntrepriseId(){
    this.collabService.getUserProfil().subscribe((res)=>{
      this.User = res;
      this.entreprise_id =  this.User.info_profil.entreprise_id;
    });
  }
  getCollaborator(){
    this.collabService.getListCollaborator().subscribe((res)=>{
      this.Collaborator = res.Collaborator;
    })
  }
  searchCollaborator(e,entreprise_id){
   if(e.target.value == "")  this.getCollaborator();
   else{
    this.collabService.searchCollaborator(e.target.value,this.entreprise_id).subscribe((res)=>{
      this.Collaborator = res;
    })
   }
  }
}
