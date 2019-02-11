import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ListherbPage } from '../listherb/listherb';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
 
  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController) { }
 
  createCode() {
    this.createdCode = this.qrData;
  }

  plol(){
    this.navCtrl.push(ListherbPage);
  }


  public list : Array<any> = [];
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.list.push({record: {id: barcodeData.text}});
      this.navCtrl.push('SpecificPage', this.list[0]);
      this.list=[];
    }, (err) => {
        console.log('Error: ', err);
    });
  }

}