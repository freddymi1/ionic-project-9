import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-projet-formateur',
  templateUrl: './projet-formateur.page.html',
  styleUrls: ['./projet-formateur.page.scss'],
})
export class ProjetFormateurPage implements OnInit {
  Projet: any = [];
  constructor(public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}

  
  ngOnInit() {
    this.getProjet();
  }
  getProjet(){
    this.projetService.getListProjectFormateur().subscribe((res)=>{
      this.Projet = res;
      console.log(res);
    })
  }

}
