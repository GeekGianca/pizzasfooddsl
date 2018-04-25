import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../models/User'
import { AuthProvider } from '../../providers/auth/auth';
import {RegisterPage} from "../register/register";
import {RecoverpasswordPage} from "../recoverpassword/recoverpassword";
import {AngularFireAuth} from "angularfire2/auth";
import {DashboardPage} from "../dashboard/dashboard";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(private oAuth: AngularFireAuth, public afAuth: AuthProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  alertInpus(input: string) {
    let alert = this.alertCtrl.create({
      title: 'Campos Vacios',
      subTitle: 'La entrada de '.concat(input).concat(' esta vacia'),
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    try{
      if(this.user.email != undefined){
        if(this.user.password != undefined){
          //const result = this.afAuth.loginUser(this.user.email, this.user.password);
          this.oAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).
            then((data) =>{
              console.log(data);
              this.navCtrl.setRoot(DashboardPage);
          }).catch((error)=>{
            console.error('You have an error', error);
            if(error.stack){
              this.navCtrl.push(DashboardPage);
            }
          });
        }else{
          this.alertInpus("Contraseña");
        }
      }else{
        this.alertInpus("Email");
      }
    }catch(error){
      console.error('Cath Error: ',error);
    }
    //this.navCtrl.setRoot(DashboardPage);
  }

  signUp(){
    this.navCtrl.push(RegisterPage);
  }

  retrievePassword(){
    this.navCtrl.push(RecoverpasswordPage);
  }
}
