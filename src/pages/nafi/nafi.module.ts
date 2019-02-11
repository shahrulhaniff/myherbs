import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NafiPage } from './nafi';

@NgModule({
  declarations: [
    NafiPage,
  ],
  imports: [
    IonicPageModule.forChild(NafiPage),
  ],
})
export class NafiPageModule {}
