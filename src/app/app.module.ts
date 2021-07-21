import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasinfoPage } from './masinfo/masinfo.page';
import { HomePage } from './home/home.page';
import {proveedor1Provider} from './providers/proveedor1';
import { LoginPage } from './login/login.page';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [AppComponent, MasinfoPage, HomePage, LoginPage],
  entryComponents: [MasinfoPage, HomePage, LoginPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , proveedor1Provider, GooglePlus],
  bootstrap: [AppComponent],
})
export class AppModule {}
