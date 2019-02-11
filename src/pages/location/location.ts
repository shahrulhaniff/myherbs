import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  public list2 : Array<any> = [
    {
      id : 'Tongkat Ali',
      vh : '190px',
      vw : '180px'
    },
    {
      id : 'Pegaga',
      vh : '476px',
      vw : '295px'
    },
    {
      id : 'Misai Kucing',
      vh : '24px',
      vw : '90px'
    }
  ];

  public id : Array<any> = [];
  public vh : Array<any> = [];
  public vw : Array<any> = [];

  public showid;
  public showvh;
  public showvw;
  showherba: string;
  herbid: string;

  
  hot: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showherba = navParams.get('data'); 
    console.log(this.showherba);
    this.herbid=this.showherba;
  }

  ionViewDidLoad() {
  this.lolism(this.navParams.get("data")); 
    console.log('Data dari navparam: ',this.navParams.get("data"));
    this.hot=this.navParams.get("data");
    console.log('value willenter: ', this.hot);
    //if ( this.showherba == 'Tongkat Ali') { /*lokasi map 1*/ }
    //else if ( this.showherba == 'Pegaga'){ /*lokasi map 2*/ }
  }

  //ionViewWillEnter() : void {
   // if(this.navParams.get("record"))
    //{
    //  this.lolism(this.navParams.get("record"));
    //  console.log('Data dari navparam shahrul: ',this.navParams.get("record"));
    //}
  //}
  
  lolism(list : any) : void
   {
    this.id = this.list2.map(items => items.id); console.log('Value dalam list: ', this.id);
    this.vh = this.list2.map(items => items.vh);
    this.vw = this.list2.map(items => items.vw);

  for(let i = 0; i <= this.list2.length; i++){ 
    console.log('for aku buat:', i);
    this.hot=this.navParams.get("data");
    console.log('data pegang willenter haa', this.hot); //sekarang ni jadi undefine. tp min buat jadi
    //console.log('kita tengak siapa this.id[i] ni',this.id[i]);
    if(this.hot==this.id[i]){    console.log('if aku buat:', i);
      this.showid = this.id[i]; console.log('Value id[i] yang bawa: ', this.id[i]);
      this.showvh = this.vh[i]; console.log('Value vh[i] yang bawa: ', this.vh[i]);
      this.showvw = this.vw[i]; console.log('Value wh[i] yang bawa: ', this.vw[i]);
      break;
    }

  }
}


}