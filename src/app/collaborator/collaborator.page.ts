import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { CollaborateurService } from '../service/collaborateur.service';
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
  selector: 'app-collaborator',
  templateUrl: './collaborator.page.html',
  styleUrls: ['./collaborator.page.scss'],
})
export class CollaboratorPage implements OnInit {
  Collaborator: any = [];
  Nombre : any = [];

  Formation : any = [];
  Presence : any = [];
  lineChart: any;
  sary:any;
  @ViewChild('doughnutCanvas',{static: true}) doughnutCanvas: ElementRef;
  @ViewChild('evaluationCanvas',{static: true}) evaluationCanvas: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,public navCtrl: NavController, public collabService: CollaborateurService, public loadingCtrl: LoadingController) {}
  id : number;
  doughnutChart: any;
  evaluationChart : any;
  // @ViewChild('lineCanvas',{static: true}) lineCanvas:ElementRef;
  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {this.id = params['id']} );
    this.getProfilCollaborator();
    this.getNombreFormation();
    this.getStagiaireFormation();
    this.getPresence();
    this.doughnutChartMethod();
    this.evaluation();
  }


  getProfilCollaborator(){
    this.collabService.getCollaboratorProfil(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      if(res!=null){
        this.Collaborator =  res;
        this.sary = this.Collaborator.Collaborator.image_blob;
      }
    })
  }
  getNombreFormation(){
    this.collabService.getNombreFormation(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      this.Nombre = await res;

      console.log(this.Nombre);
    })
  }
  getStagiaireFormation(){
    this.collabService.getStagiaireFormation(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      this.Formation = await res;
      console.log(this.Formation);
    })
  }
  getPresence(){
    this.collabService.getPresence(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(async (res)=>{
      this.Presence = await res;
      /**Modifier data presence */
      this.doughnutChart.data.datasets[0].data.push(this.Presence.absent);
      this.doughnutChart.data.datasets[0].data.push(this.Presence.presence);
      this.doughnutChart.data.datasets[0].data.push(this.Presence.partiel);
      this.doughnutChart.update();
       /**Modifier data evaluation */
       this.evaluationChart.data.datasets[0].data.push(this.Presence.na);
       this.evaluationChart.data.datasets[0].data.push(this.Presence.ec);
       this.evaluationChart.data.datasets[0].data.push(this.Presence.ac);
       this.evaluationChart.update();
    })
  }
  /**CHART PRESENCE*/
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Absent', 'Present'],
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
  /**chart evaluation */
  evaluation() {
    this.evaluationChart = new Chart(this.evaluationCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Non-acquis', 'En cours','Acquis'],
        datasets: [{
          label: '# of Votes',
          data: [0,0,0],
          backgroundColor: [
            'rgba(227, 33, 33, 0.8)',
            'rgba(51, 232, 102, 0.8)',
            'rgba(168, 227, 33, 0.89)'
          ]
        }]
      }
    });
  }

}
