import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { EvaluationService } from '../service/evaluation.service';
import { ProjetService } from '../service/projet.service';
@Component({
  selector: 'app-evaluation-apprenant',
  templateUrl: './evaluation-apprenant.page.html',
  styleUrls: ['./evaluation-apprenant.page.scss'],
})
export class EvaluationApprenantPage implements OnInit {

  constructor(private evaluationService:EvaluationService, private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}
  stagiaire_id : string;
  module_id : string;
  groupe_id : string;
  validation_globale : string;
  valid_globale : number;
  validation : any = [];
  Competence: any = [];
  note: any = [];
  comp : any  = [];
  status : any = [];
  ngOnInit() {
    /**Recuperer les parametres de la route */
    this.stagiaire_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.module_id = this.activatedRoute.snapshot.paramMap.get('module_id');
    this.groupe_id = this.activatedRoute.snapshot.paramMap.get('groupe_id');
    this.getCompetence();
  }
  getCompetence(){
    this.evaluationService.getCompetence(this.module_id,this.groupe_id,this.stagiaire_id).subscribe((res)=>{
      this.Competence = res;
      for (let i = 0; i < this.Competence.competences.length; i++) {
        this.comp[i] = this.Competence.competences[i].id;
        /** s'il existe deja des evaluations du stagiaire */
        if(this.Competence.evaluation.length > 0 ) {
            this.note[i] =  this.Competence.evaluation[i].note_apres;
            if(this.Competence.evaluation[i].status == 1) this.validation[i] = "na";
            if(this.Competence.evaluation[i].status == 2) this.validation[i] = "ec";
            if(this.Competence.evaluation[i].status == 3) this.validation[i] = "ac";
        }
        if(this.Competence.evaluation_globale.length > 0) {
            if(this.Competence.evaluation_globale[0].status == 1) this.validation_globale = "nv";
            if(this.Competence.evaluation_globale[0].status == 2) this.validation_globale = "va";
        }
      }
    });
  }
  evaluation(){
    /**Validation par status : NA - EC - AC */
    for (let i = 0; i < this.Competence.competences.length; i++) {
      if(this.validation[i] == "na") this.status[i] = 1;
      if(this.validation[i] == "ec") this.status[i] = 2;
      if(this.validation[i] == "ac") this.status[i] = 3;
    }
    if(this.validation_globale == "nv") this.valid_globale = 1;
    if(this.validation_globale == "va") this.valid_globale = 2;

    this.evaluationService.evaluation(this.comp,this.groupe_id,this.stagiaire_id,this.note,this.status,this.valid_globale).subscribe((res)=>{
      console.log(res);
    });
  }
}
