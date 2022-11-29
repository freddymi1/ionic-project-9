import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { ProjetService } from '../service/projet.service';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
    agenda = [];
    calendarOptions: CalendarOptions;
  constructor( private activatedRoute: ActivatedRoute,private http:HttpClient,private projetService:ProjetService){}
    // events : any;
    // dateItems: string | any;
    public events: any = "2022-08-10";
    
    ngOnInit() {
      this.getAgenda();
    }
    getAgenda(){
      
      this.projetService.getAgendaEvent().subscribe((res: any)=>{

        console.log("ok", res.Event);


        this.events =  res.Event;
        console.log("ko", this.events);
        
      })
    }
}
