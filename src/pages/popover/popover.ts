import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListherbPage } from '../listherb/listherb';
import { Storage } from '@ionic/storage';
import { LocationPage } from '../location/location';

/**
 * Generated class for the PopoverPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',

  template: `
    <!-- <ion-item (click)="sort()"> Susun mengikut Abjad</ion-item>
    <ion-item (click)="sort2()">Susun mengikut Kod  </ion-item> -->
    <ion-item (click)="viewLokasi(showherba)">Lokasi</ion-item>
    `
})
export class PopoverPage {

  public showherba;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage : Storage
              ) {

      let showherba = this.navParams.get('showherbapost');
      this.showherba = showherba;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  viewLokasi(showherba) {
    showherba = this.showherba || 'No Herb Specific';
    this.navCtrl.push(LocationPage, {
      data: showherba
    });
  }

   /* func kat sini , mcm mana nak susun list yang ada kat sebelah */
   sort(){
    //this.storage.set('susunan', 'sort');
    this.navCtrl.setRoot(ListherbPage);
  }
  
   /* Min  */
   sort2(){
    //this.storage.set('susunan', 'sort2');
    this.navCtrl.setRoot(ListherbPage);
  }

 

}
