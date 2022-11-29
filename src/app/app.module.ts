
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { AuthServiceService } from './auth-service.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
@NgModule({
    declarations: [AppComponent, LoginPage],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpModule, FormsModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthServiceService,LocalNotifications],
    bootstrap: [AppComponent]
})
export class AppModule {}
