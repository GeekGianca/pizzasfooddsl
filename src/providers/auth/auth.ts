import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    console.log('Hello AuthProvider Provider');
  }

  //Show Alert with register
  alertAuth(input: string, type:string) {
    let alert = this.alertCtrl.create({
      title: type,
      subTitle: input,
      buttons: ['OK']
    });
    alert.present();
  }

  //Show toast with error
  showToast(position: string, message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: position
    });
    toast.present(toast);
  }

  async registerUser(email:string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((data) =>{
        this.alertAuth("El registro se ha completado exitosamente, ahora puede iniciar sesion", "Registro Exitoso!");
      }).catch((error) =>{
        console.error(error);
        if(error.code == 'auth/weak-password'){
          this.alertAuth("La contraseña debe tener mas de 6 caracteres", "Error al Registrar");
        }else if(error.code == 'auth/email-already-in-use'){
          this.alertAuth("El correo electronico ya se encuentra en uso, por favor ingrese otro", "Error al Registrar");
        }
      });
  }

  async recoveryPassword(email:string){
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then((data)=>{
       this.showToast('middle', 'Enviamos un link a tu correo para la recuperacion');
      }).catch((error)=>{
      this.showToast('middle', 'Se ha presentado un error de tipo '+error.code);
    });
  }

  /*async loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((data) =>{
        console.log(data);
      }).catch((error) => {
        console.error('Have an Error', error);
        if(error.code == 'auth/wrong-password'){
          this.showToast('middle', 'La contraseña es incorrecta');
        }else if(error.code == 'auth/user-not-found'){
          this.showToast('middle', 'Este correo no esta registrado, por favor registrese');
        }
      });
  }*/
}
