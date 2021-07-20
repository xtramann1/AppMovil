import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class proveedor1Provider{
    constructor(public http:HttpClient){
        console.log("wena choro");
    }
    obtenerdatos(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }   
}