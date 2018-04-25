import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourordersPage } from './yourorders';

@NgModule({
  declarations: [
    YourordersPage,
  ],
  imports: [
    IonicPageModule.forChild(YourordersPage),
  ],
})
export class YourordersPageModule {}
