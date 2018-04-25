import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalsPage } from './locals';

@NgModule({
  declarations: [
    LocalsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalsPage),
  ],
})
export class LocalsPageModule {}
