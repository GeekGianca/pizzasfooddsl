import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodPage } from "../food/food"
import { ShoppingcarPage } from "../shoppingcar/shoppingcar"

import { AngularFireList,AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Component({
 selector: 'page-dashboard',
 templateUrl: 'dashboard.html'
})
export class DashboardPage {

 itemsRef: AngularFireList<any>;
 items: Observable<any[]>;

 constructor(public navCtrl: NavController,public db: AngularFireDatabase) {
   this.itemsRef = db.list('/Category/');
   // Use snapshotChanges().map() to store the key
   this.items = this.itemsRef.snapshotChanges().map(changes => {
     return changes.map(c => ({ 
       key: c.payload.key, 
       ...c.payload.val() 
     }));
   });
   console.log("Captura: ",this.items);
 }

  showLocals(keylocal: string){
    console.log(keylocal);
    this.navCtrl.setRoot(FoodPage,{
      keylcl: keylocal 
    });
  }

  viewToCart(){
    this.navCtrl.setRoot(ShoppingcarPage);
  }
}
// import {Component, ViewChild} from '@angular/core';
// import {Nav, NavController, NavParams} from 'ionic-angular';

// import {OrdersPage} from "../orders/orders";
// import {YourordersPage} from "../yourorders/yourorders";
// import {LocalsPage} from "../locals/locals";
// import { FirebaseDatabaseServiceProvider } from '../../providers/firebase-database-service/firebase-database-service';
// import { AngularFireList, AngularFireDatabase,  } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

// export interface PageInterface{
// title: string;
// pageName: string;
// icon: string;
// }

// @Component({
// selector: 'page-dashboard',
// templateUrl: 'dashboard.html',
// })
// export class DashboardPage {
// foodRef: AngularFireList<any>;
// items: Observable<any[]>;


// constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase) {
//   this.foodRef = afd.list('/Food/');
//   this.items = this.foodRef.snapshotChanges().map(changes =>{
//     return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
//   });
// }

// openPage(page: PageInterface){

// }

// isActive(page: PageInterface){

// }
// }
