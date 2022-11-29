import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from '../service/evaluation.service';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
@Component({
  selector: 'app-resultat-apprenant',
  templateUrl: './resultat-apprenant.page.html',
  styleUrls: ['./resultat-apprenant.page.scss'],
})
export class ResultatApprenantPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private evaluationService:EvaluationService) {}
  @ViewChild('radarCanvas',{static: true}) radarCanvas: ElementRef;
  stagiaire_id : string;
  module_id : string;
  groupe_id : string;
  Evaluation :any;
  radarChart:any;
  ngOnInit() {
     /**Recuperer les parametres de la route */
     this.stagiaire_id = this.activatedRoute.snapshot.paramMap.get('id');
     this.groupe_id = this.activatedRoute.snapshot.paramMap.get('groupe_id');
   //  this.getHistoriqueEvaluation();
   this.doughnutChartMethod();
  }
  getHistoriqueEvaluation(){
    this.evaluationService.historique_evaluation(this.stagiaire_id,this.groupe_id).subscribe(async (res)=>{
      this.Evaluation = await res;
      var total_detail = this.Evaluation.detail.length;
      var detail = this.Evaluation.detail;
    })
    this.doughnutChartMethod();
  }
   /**CHART PRESENCE*/
 
 
   doughnutChartMethod() {
    var label = [];
    var note_avant = [];
    var note_apres = [];
    var objectif = [];
    this.evaluationService.historique_evaluation(this.stagiaire_id,this.groupe_id).subscribe(async (res)=>{
      this.Evaluation = await res;
      var total_detail = this.Evaluation.detail.length;
      var detail = this.Evaluation.detail;
      for (let i = 0; i < total_detail; i++) {
          label.push(detail[i].titre_competence);
          note_avant.push(detail[i].note_avant);
          note_apres.push(detail[i].note_apres);
          objectif.push(detail[i].objectif);
      }
      console.log('note avant',note_avant)
      console.log('note_apres',note_apres);
      this.radarChart = new Chart(this.radarCanvas.nativeElement, {
        type: 'radar',
        data: {
          labels: label,
          datasets: [{
            label: 'Note avant',
            data: note_avant,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
          },{
            label: 'Note apres',
            data: note_apres,
            backgroundColor: 'rgba(46, 204, 113, 0.2 )',
            borderColor: 'rgb(46, 204, 113)',
          },
          {
            label: 'Objectif',
            data: objectif,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)'
          }
        ]
        }
      });
    })
  }
 
}
