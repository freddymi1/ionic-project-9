import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateurService } from '../service/collaborateur.service';
import { FormateurService } from '../service/formateur.service';
import { NavController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public collabService: CollaborateurService, public formateurService:FormateurService, public loadingCtrl: LoadingController) {}
  Collaborator: any = [];
  Formateur: any =[];
  ngOnInit() {
    this.getProfilFormateur();
  }
  /**profil referent */
  getProfilCollaborator(){
    this.collabService.getCollaboratorProfil(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      this.Collaborator = await res;
      console.log(res);
    })
  }
  /**profil formateur */
  getProfilFormateur(){
    this.formateurService.getProfilFormateur().subscribe(async (res)=>{
      this.Formateur = await res;
      console.log(res);
    })
  }


}
