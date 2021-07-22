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

  latitud: any;
  longitud: any;
  profundidad:any;
  magnitud:any;
  fechaLocal:any;
  fechaUTC:any;
  referencia:any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor(
    private active:ActivatedRoute, public proveedor:proveedor1Provider,
  ) {}
  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get("idd");
    this.finalId = this.id - 1;
    this.proveedor.obtenerdatos()
    .subscribe(res=>{
      console.log("Res",res)
      this.sismos = res;
      this.latitud = this.sismos[this.finalId].latitud;
      this.longitud = this.sismos[this.finalId].longitud;
      this.magnitud = this.sismos[this.finalId].magnitud;
      this.fechaLocal= this.sismos[this.finalId].fechaLocal;
      this.fechaUTC = this.sismos[this.finalId].fechaUTC;
      this.profundidad = this.sismos[this.finalId].profundidad;
      this.referencia = this.sismos[this.finalId].referencia_Geografica;
      console.log(this.latitud + "  "+ this.longitud);
      this.showmap(this.latitud, this.longitud);
    }
    )
  }

  showmap(latitud, longitud){
    const mapele: HTMLElement = document.getElementById('map');
    console.log(latitud + "  "+ longitud);
    const LatLng = {lat: latitud , lng: longitud};
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
}
