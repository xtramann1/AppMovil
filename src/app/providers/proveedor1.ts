import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class proveedor1Provider{
    constructor(public http:HttpClient){
        console.log("Hola");
    }
    obtenerdatos(){
        return this.http.get('http://api.jkd.cl:18082/grupo-c/v1/Sismo/listar')
    }   
}