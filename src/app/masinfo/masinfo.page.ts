import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

import { proveedor1Provider } from '../providers/proveedor1';

declare var google: any;

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {

  marker: any;
  map: null;
  id: any;
  finalId: number;
  name:string;
  username:string;
  email:string;
  sismos: any=[];

  latitud:number;
  longitud:number;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor(
    private active:ActivatedRoute, public proveedor:proveedor1Provider,
  ) {}

  showmap(){
    const mapele: HTMLElement = document.getElementById('map');
    const LatLng = {lat: -33.53340 , lng: -70.57544};
    this.map = new google.maps.Map(mapele,{
      center: LatLng,
      zoom: 15,
      disableDefaultUI: true
    });
    google.maps.event.addListenerOnce(this.map, 'idle', ( ) => {//this.renderMakers();
    mapele.classList.add('show-map');
    this.marker = new google.maps.Marker({
      position: LatLng,
      map: this.map,
      draggable: true,
      title: "Lugar del sismo"
      });
    })
  }

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    this.proveedor.obtenerdatos()
    .subscribe(res=>{
      console.log("Res",res)
      this.sismos = res;
      this.name = this.sismos[this.finalId].name;
      this.username = this.sismos[this.finalId].username;
      this.email= this.sismos[this.finalId].email;
      console.log("nombre",this.name)
    }
    )
    this.showmap();
  }
}
