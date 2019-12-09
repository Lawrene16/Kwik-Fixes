import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Find Solution',
      url: '/solutions',
      icon: 'sunny'
    },
    {
      title: 'Find Engineer',
      url: '/mechanics',
      icon: 'hammer'
    },
    {
      title: 'Nearest Garage',
      url: '/home',
      icon: 'car'
    },
    {
      title: 'Promotions',
      url: '/promotions',
      icon: 'easel'
    },    {
      title: 'Share',
      url: '/promotions',
      icon: 'share'
    },
  ];

  constructor(
    private platform: Platform,
    public socialSharing: SocialSharing,
    public router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.statusBar.backgroundColorByHexString('#08abc8');
      // this.statusBar.co
      this.statusBar.overlaysWebView(false); 
    });
  }

  compilemsg(): string {
    var msg = "Hi, this is a test of the app sharing";
    // return msg.concat(" \n Sent from my Awesome App !" + " \n " + this.refernumber);
    return msg;
  }
  shareApp() {
    var msg = this.compilemsg();
    this.socialSharing.share(msg, null, null, null);
  }

  openPage(p){
    if(p.title == "Share"){
      this.shareApp();
    }else{
      this.router.navigateByUrl(p.url);

    }
  }
}
