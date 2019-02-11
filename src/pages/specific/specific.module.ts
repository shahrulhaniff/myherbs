import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificPage } from './specific';

@NgModule({
  declarations: [
    SpecificPage
  ],
  imports: [
    IonicPageModule.forChild(SpecificPage),
  ],
})
export class SpecificPageModule {}