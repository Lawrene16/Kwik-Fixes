import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import * as firebase from "firebase";


var firebaseconfig = {
  apiKey: "AIzaSyBijSBHayFEQDXgkVAI-0dB1K8--xw4M1A",
    authDomain: "kwik-fix.firebaseapp.com",
    databaseURL: "https://kwik-fix.firebaseio.com",
    projectId: "kwik-fix",
    storageBucket: "kwik-fix.appspot.com",
    messagingSenderId: "55304440772",
    appId: "1:55304440772:web:9a870d539f71305ed7b291",
    measurementId: "G-70G8EVHXGJ"
};

firebase.initializeApp(firebaseconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseconfig),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Geolocation,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
