import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database'
import {AngularFireAuth} from "angularfire2/auth";
import { Food } from '../../models/Food'
import { Requests } from '../../models/Requests'


@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
	
selectFood: any;
foodRef: AngularFireList<any>;
favRef: AngularFireList<any>;
addRef: AngularFireList<any>;
food: Observable<any[]>;
quantity: number = 0;
foodAdd = {} as Food;
request = {} as Requests;
userV: string;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public db: AngularFireDatabase,
  	public toastCtrl: ToastController,
  	public alertCtrl: AlertController,
  	public auth: AngularFireAuth) {
    this.addRef = db.list('Request/'+this.auth.auth.currentUser.uid);
  	this.selectFood =  navParams.get('keylcl');
  	this.foodRef = db.list('Food/');
  	this.favRef = db.list('Favorites/');
  	this.food = this.foodRef.snapshotChanges().map(changes =>{
  		return changes.map(c => ({
  			key: c.payload.key, ...c.payload.val()
  		}))
  	});

  	/*this.foodRef.snapshotChanges().subscribe(item =>{
  		item.forEach(item => {
  			console.log(item.type);
  			console.log(item.key);
  			console.log(item.payload.val());
  			this.foodList.push(item.payload.val());
  		});
  	});*/
  }

  ionViewDidLoad() {
    console.log("Food Selected: ",this.selectFood);
  }

	addToCart(price: string, name: string, discount: string, key: string){
		this.request.Name = name;
		this.request.Discount = discount;
		this.request.Price = price;
		console.log(this.foodAdd.Price, this.foodAdd.Discount, this.foodAdd.Name);
		this.showLoadQuantity();
	}

	presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Se agrego al carrito',
      duration: 3000
    });
    toast.present();
    //Add Request to Firebase
    this.addRef.update(this.auth.auth.currentUser.uid,{"FoodRequest":this.request});
  }

  addFavorites(keyFood: string){
  	this.favRef.push({"MyFavorites":keyFood});
  	let toast = this.toastCtrl.create({
      message: 'Agregado a Favoritos',
      duration: 3000
    });
    toast.present();
  }

  showLoadQuantity(){
  	let promp = this.alertCtrl.create({
  		title: 'Cantidad de Este Producto?',
  		message: 'Ingrese la cantidad a pedir',
  		inputs:[{
  				name: 'quant',
  				placeholder: 'Cantidad'
  			},
  		],
  		buttons: [
  			{
  				text: 'Cancelar',
  				handler: data => {
  					console.log("Cancelado");
  			}
  		},{
  			text: 'Agregar',
  			handler: data => {
  				this.request.Quantity = data.quant;
  				this.presentToast();
  			}
  		}]
  	});
  	promp.present();
  }
}
