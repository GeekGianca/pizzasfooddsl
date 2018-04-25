import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { OrdersPage } from '../pages/orders/orders';
import { ShoppingcarPage } from '../pages/shoppingcar/shoppingcar';
import { LocalsPage } from '../pages/locals/locals';
import { FoodPage } from '../pages/food/food';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Menu', component: DashboardPage },
      { title: 'Pedidos', component: OrdersPage },
      { title: 'Ordenes', component: ShoppingcarPage },
      { title: 'Locales disponibles', component: LocalsPage },
      { title: 'Cerrar Sesion', component: FoodPage }
    ];
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

