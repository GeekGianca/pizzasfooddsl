import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireList,AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-shoppingcar',
  templateUrl: 'shoppingcar.html',
})
export class ShoppingcarPage {

shopRef: AngularFireList<any>;
foods: Observable<any[]>;
user: string;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public db: AngularFireDatabase,
  	public auth: AngularFireAuth) {
  	this.auth.authState.subscribe(usr =>{
  		this.user = usr.uid;
    	console.log("Cart",usr.uid);
    });
  	this.shopRef = db.list('Requests/');
  	this.foods = this.shopRef.snapshotChanges().map(changes =>{
  		return changes.map(c => ({
  			key: c.payload.key, ...c.payload.val()
  		}))
  	});
  	this.shopRef.snapshotChanges().subscribe(item =>{
  		item.forEach(item => {
  			console.log(item.type);
  			console.log(item.key);
  			console.log(item.payload.val());
  		});
  	});
  }

  ionViewDidLoad() {
  	console.log(this.foods);
  	console.log("User: ", this.user);
    console.log('ionViewDidLoad ShoppingcarPage');
  }

}
