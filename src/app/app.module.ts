import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasinfoPage } from './masinfo/masinfo.page';
import {proveedor1Provider} from './providers/proveedor1';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  declarations: [AppComponent, MasinfoPage, TabsPage],
  entryComponents: [MasinfoPage, TabsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , proveedor1Provider, GooglePlus],
  bootstrap: [AppComponent],
})
export class AppModule {}
