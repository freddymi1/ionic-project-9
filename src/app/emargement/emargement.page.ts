import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { ProjetService } from '../service/projet.service';
@Component({
  selector: 'app-emargement',
  templateUrl: './emargement.page.html',
  styleUrls: ['./emargement.page.scss'],
})
export class EmargementPage implements OnInit {
  Presence: any = [];
  Projet: any = [];
  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.getPresenceProjet();
    this.getGroupeInfo();

  }
  getPresenceProjet(){
    this.projetService.getPresenceProject(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((res)=>{
      this.Presence = res;
      console.log(res);
    })
  }
  getGroupeInfo(){
    this.projetService.getDetailProject(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((res)=>{
      this.Projet = res;
    })
  }


}
