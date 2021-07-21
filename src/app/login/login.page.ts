import { Component } from '@angular/core'; 
import { AngularFireAuth } from '@angular/fire/auth'; 
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Platform } from '@ionic/angular'; 
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  picture;
  name:String = null;
  email:String  = null;

  constructor(private afAuth: AngularFireAuth,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private router: Router) {}

  loginGoogle() { 
    if (this.platform.is('android')) { 
      this.loginGoogleAndroid(); } 
    else { 
      this.loginGoogleWeb();
    }
  }
  async loginGoogleAndroid() { 
    const res = await this.googlePlus.login({
      'webClientId': '897719871938-iurmqluh7csrtlefsbn94misldgd12jj.apps.googleusercontent.com',
      'offline': true
    });
    const resConfirmed = await this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)); 
    const user = resConfirmed.user; 
    this.picture = user.photoURL; 
    this.name = user.displayName; 
    this.email = user.email;
  }

  async loginGoogleWeb() { 
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    const user = res.user; console.log(user); 
    this.picture = user.photoURL; 
    this.name = user.displayName; 
    this.email = user.email; 
  }

  buttonEntrar(){
    if(this.name == null || this.email == null ){
      console.log("No se han ingresado credenciales");
    }
    else{
      var contador = 0;
      contador = this.contarLargo(contador);
      if(this.email[contador + 1] != 'u' && this.email[contador + 2] != 't'){
        console.log("El correo ingresado no es utem " + this.email[contador + 1]);
       }
      else{
        this.router.navigateByUrl('tabs/home');}
    }
  }

  contarLargo(contador){
    while(this.email[contador] != '@'){
      contador++;
    }
    return contador; 
  }
  ngOnInit() {

  }
}

