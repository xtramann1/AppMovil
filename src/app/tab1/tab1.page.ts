import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MasinfoPage } from '../masinfo/masinfo.page';
import {proveedor1Provider} from '../providers/proveedor1';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios;
  constructor(public proveedor:proveedor1Provider) {
    
  }
  ngOnInit(){
    this.proveedor.obtenerdatos()
    .subscribe(
      (data) => {this.usuarios = data;},
      (error)=> {console.log(error);}
    )
  }
  
}
