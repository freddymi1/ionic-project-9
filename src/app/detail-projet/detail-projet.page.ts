import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ProjetService } from '../service/projet.service';
import { SERVER_URL } from 'src/environments/environment';
@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.page.html',
  styleUrls: ['./detail-projet.page.scss'],
})
export class DetailProjetPage implements OnInit {
  Projet: any = [];
  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}

  id:number;
  role = localStorage.getItem('role');
  ngOnInit() {
    

    this.getDetailProjet();
  }
  getDetailProjet(){
    this.projetService.getDetailProject(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((res)=>{
      this.Projet = res;
    })
  }
}
