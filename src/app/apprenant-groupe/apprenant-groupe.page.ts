import { ProjetService } from './../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from  '@ionic/angular';

import { EvaluationService } from '../service/evaluation.service';

@Component({
  selector: 'app-apprenant-groupe',
  templateUrl: './apprenant-groupe.page.html',
  styleUrls: ['./apprenant-groupe.page.scss'],
})
export class ApprenantGroupePage implements OnInit {
  Stagiaire: any = [];
  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}
  role = localStorage.getItem('role');

  ngOnInit() {
    this.getParticipant();
  }
  getParticipant(){
    this.projetService.getParticipant(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      this.Stagiaire = await res;
      console.log(res);
    })
  }
 
}
