import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class proveedor1Provider{
    constructor(public http:HttpClient){
        console.log("Hola");
    }
    obtenerdatos(){
        return this.http.get('http://localhost:9696/v1/Sismo/listar')
    }   
}