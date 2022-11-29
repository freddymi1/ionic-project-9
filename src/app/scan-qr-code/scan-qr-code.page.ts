import { ActivatedRoute } from '@angular/router';
import { EmargementService } from './../service/emargement.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Local } from 'protractor/built/driverProviders';
const { BarcodeScanner }  = Plugins;
const {LocalNotifications} = Plugins;
@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.page.html',
  styleUrls: ['./scan-qr-code.page.scss'],
})
export class ScanQrCodePage  implements OnInit{
  constructor(private alertController:AlertController, private emargementService : EmargementService,private activatedRoute: ActivatedRoute) { }
  result = null;
  scanActive = false;
  stagiaire_id= null;
  d = new Date();
  h = this.d.getHours();
  m =this.d.getMinutes();
  s =this.d.getSeconds();
  heure = this.h + "+" + this.m; 
  detail_id = this.activatedRoute.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.startScanner();
  }
  /**Notification */
  async scheduleBasic(){
    await LocalNotifications.schedule({
      notifications:[
        {
          title: 'Friendly reminder',
          body: 'Join the ionic Academy',
          id: 1,
          extra : {
            data: 'Pass data to  your handler'
          },
          iconColor:'#0000FF'
        }
      ]
    });
  }
  ngOnDestroy(): void {
    BarcodeScanner.stopScan();
  }
 
  async startScanner(){
    const allowed = await this.checkPermission();
    if(allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();
      if(result.hasContent){
        this.stagiaire_id= result.content;
        this.emargementService.MakePresence(this.detail_id,this.stagiaire_id).subscribe((result:any) => {
            if(result.success == null)   this.result  = result.error;
            if(result.success != null) this.result = result.success.nom_emp + " "+ result.success.prenom_emp;
        });
          
        this.scanActive = false;
      } 
    }
  }
  async checkPermission(){
    return new Promise(async(resolve,reject) =>{
      const status = await BarcodeScanner.checkPermission({force : true});
      if(status.granted) resolve(true);
      else if (status.denied){
        const alert = await this.alertController.create({
            header: "No permission",
            message: "Please allow camera access in your settings",
            buttons : [{
              text: "No",
              role: "cancel"
            },
            {
              text: "Open settings",
              handler:() => {
                resolve(false);
                BarcodeScanner.openAppSettings();
              }
            }
          ]
        })
      } else resolve(false);
    });
  }
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false; 
  }

  

}
