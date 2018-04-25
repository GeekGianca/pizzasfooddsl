import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/User'
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  retriyingPassword: string;
  userInput: string;
  userPassword: string;

  constructor(public afAuth: AuthProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  showAlertPassword(alerta: string){
    let alert = this.alertCtrl.create({
      title: 'Algo salio mal',
      subTitle: alerta,
      buttons: ['Salir', 'Intentar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.userInput != undefined){
      if(this.userPassword != undefined){
        if(this.retriyingPassword != undefined){
          if (this.retriyingPassword === this.userPassword){
            const result = this.afAuth.registerUser(this.userInput, this.userPassword);
          }else{
            this.showAlertPassword("Las contraseñas no coinciden, por favor intente nuevamente");
          }
        }else{
          this.showAlertPassword("El campo de repetir contraseña no puede estar vacio");
        }
      }else{
        this.showAlertPassword("El campo de contraseña no puede estar vacio");
      }
    }else{
      this.showAlertPassword("El campo de correo no puede estar vacio");
    }
  }
}
