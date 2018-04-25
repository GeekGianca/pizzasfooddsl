import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FIREBASE_CONFIG} from './app.firebase.config';
import {DashboardPage} from "../pages/dashboard/dashboard";
import {RegisterPage} from "../pages/register/register";
import {RecoverpasswordPage} from "../pages/recoverpassword/recoverpassword";
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseDatabaseServiceProvider } from '../providers/firebase-database-service/firebase-database-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RegisterPage,
    RecoverpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, 'PizzaFoodDsl'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    RegisterPage,
    RecoverpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseDatabaseServiceProvider
  ]
})
export class AppModule {}
