import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
	
selectFood: any;
foodRef: AngularFireList<any>;
food: Observable<any[]>;
foodList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
  	this.selectFood =  navParams.get('keylcl');
  	this.foodRef = db.list('Food/');
  	this.foodRef.snapshotChanges().subscribe(item =>{
  		item.forEach(item => {
  			console.log(item.type);
  			console.log(item.key);
  			console.log(item.payload.val());
  			this.food = item.payload.val();
  		});
  	});
  	console.log("Array: ", this.food);
  }

  ionViewDidLoad() {
    console.log("Food Selected: ",this.selectFood);
  }

}
