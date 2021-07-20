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

@NgModule({
  declarations: [AppComponent, MasinfoPage, HomePage],
  entryComponents: [MasinfoPage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, proveedor1Provider],
  bootstrap: [AppComponent],
})
export class AppModule {}
