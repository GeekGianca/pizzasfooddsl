import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the FirebaseDatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDatabaseServiceProvider {

  constructor(public afdb: AngularFireDatabase) {
    
  }

  getListCart(){
    return this.afdb.list('Food/');
  }

}
