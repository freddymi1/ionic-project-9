import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, MenuController } from '@ionic/angular';

import { ProjetService } from '../service/projet.service';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.page.html',
  styleUrls: ['./projet.page.scss'],
})
export class ProjetPage implements OnInit {
  Projet: any = [];
  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.getProjet();
  }
  getProjet(){
    this.projetService.getListProject().subscribe((res)=>{
      this.Projet = res;
      console.log(res);
    })
  }

}
