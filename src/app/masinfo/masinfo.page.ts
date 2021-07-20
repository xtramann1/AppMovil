import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { proveedor1Provider } from '../providers/proveedor1';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {

  id: any;
  finalId: number;
  usuarios;
  name:string;
  username:string;
  email:string;
  sismos: any=[];

  latitud:number;
  longitud:number;
  mapref = null;
  constructor(
    private active:ActivatedRoute, public proveedor:proveedor1Provider,
  ) {}

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
  }
}
