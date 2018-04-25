import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';

import {OrdersPage} from "../orders/orders";
import {YourordersPage} from "../yourorders/yourorders";
import {LocalsPage} from "../locals/locals";
import { FirebaseDatabaseServiceProvider } from '../../providers/firebase-database-service/firebase-database-service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  food: Observable<any[]>;
  foodList: AngularFireList<any>;
  data = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase) {
    this.food = afd.list('/Food/').valueChanges();
    console.log(this.food);
  }

  openPage(page: PageInterface){

  }

  isActive(page: PageInterface){

  }
}
