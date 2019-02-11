import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ListherbPage } from '../pages/listherb/listherb';

import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { ScanPage } from '../pages/scan/scan';
import { LatarPage } from '../pages/latar/latar';
import { FaqPage } from '../pages/faq/faq';
import { BiblioPage } from '../pages/biblio/biblio';
import { HubungiPage } from '../pages/hubungi/hubungi';
import { NafiPage } from '../pages/nafi/nafi';
import { LocationPage } from '../pages/location/location';
import { PopoverPage } from '../pages/popover/popover';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListherbPage,
    SearchPipe,
    SortPipe,
    ScanPage,
    LatarPage,
    FaqPage,
    BiblioPage,
    HubungiPage,
    NafiPage,
    LocationPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListherbPage,
    ScanPage,
    LatarPage,
    FaqPage,
    BiblioPage,
    HubungiPage,
    NafiPage,
    LocationPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
