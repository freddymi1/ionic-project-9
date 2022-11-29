import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ProjetService } from '../service/projet.service';
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
  selector: 'app-emargement-apprenant',
  templateUrl: './emargement-apprenant.page.html',
  styleUrls: ['./emargement-apprenant.page.scss'],
})
export class EmargementApprenantPage implements OnInit {
  stagiaire_id : string;
  groupe_id : string;
  Presence : any;
  doughnutChart: any;
  prc_abs:string;
  prc_prs:string;
  constructor( private activatedRoute: ActivatedRoute,public navCtrl: NavController, public projetService: ProjetService, public loadingCtrl: LoadingController) {}
  @ViewChild('doughnutCanvas',{static: true}) doughnutCanvas: ElementRef;
  ngOnInit() {
    /**Recuperer les parametres de la route */
    this.stagiaire_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.groupe_id = this.activatedRoute.snapshot.paramMap.get('groupe_id');

    this.doughnutChartMethod();
  }
 
  /**CHART PRESENCE*/
  doughnutChartMethod() {
    var label = [];
    this.projetService.getPresenceApprenant(this.stagiaire_id,this.groupe_id).subscribe(async (res)=>{
      this.Presence = await res;
      console.log(this.Presence);
      /**Modifier data presence */
      this.doughnutChart.data.datasets[0].data.push(this.Presence.absence);
      this.doughnutChart.data.datasets[0].data.push(this.Presence.presence);
      this.prc_abs = "Absence ("+this.Presence.absence+"%)";
      this.prc_prs= "Presence (" + this.Presence.presence+"%)";
      label.push(this.prc_abs,this.prc_prs);
      console.log("abs",this.prc_abs);
      this.doughnutChart.update();
    })
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels:label,
        datasets: [{
          label: '# of Votes',
          data: [0,0],
          backgroundColor: [
            'rgba(227, 33, 33, 0.8)',
            'rgba(51, 232, 102, 0.8)'
          ]
        }]
      }
    });
  }
}
