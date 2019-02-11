import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular/';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { ListherbPage } from '../pages/listherb/listherb';
import { ScanPage } from '../pages/scan/scan';
import { LatarPage } from '../pages/latar/latar';
import { FaqPage } from '../pages/faq/faq';
import { BiblioPage } from '../pages/biblio/biblio';
import { HubungiPage } from '../pages/hubungi/hubungi';
import { NafiPage } from '../pages/nafi/nafi';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListherbPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'Latar Belakang', component: LatarPage } ,
      { title: 'Senarai Tanaman Ubatan', component: ListherbPage },
      { title: 'Imbas QR', component: ScanPage },
      { title: 'FAQ', component: FaqPage },
      { title: 'Bibliografi', component: BiblioPage },
      { title: 'Hubungi Kami', component: HubungiPage },
      { title: 'Penafian', component: NafiPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
