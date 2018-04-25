import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingcarPage } from './shoppingcar';

@NgModule({
  declarations: [
    ShoppingcarPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingcarPage),
  ],
})
export class ShoppingcarPageModule {}
