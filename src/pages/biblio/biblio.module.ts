import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiblioPage } from './biblio';

@NgModule({
  declarations: [
    BiblioPage,
  ],
  imports: [
    IonicPageModule.forChild(BiblioPage),
  ],
})
export class BiblioPageModule {}
