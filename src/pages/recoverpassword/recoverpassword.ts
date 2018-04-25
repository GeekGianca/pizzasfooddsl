import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/User";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the RecoverpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recoverpassword',
  templateUrl: 'recoverpassword.html',
})
export class RecoverpasswordPage {

  user = {} as User;

  constructor(public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverpasswordPage');
  }

  restorePassword(){
    this.auth.recoveryPassword(this.user.email);
    this.navCtrl.pop();
  }
}
