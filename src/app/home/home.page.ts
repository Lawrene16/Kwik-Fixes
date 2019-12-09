// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('Map', {static: false}) mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyCaocV4JretN3D3Cseb0qQAk4vmcqvh36U'; /*Your API Key*/
  constructor(public zone: NgZone,
    public toastCtrl: ToastController, public geolocation: Geolocation) {
    this.loadMap()
  }

  loadMap(){
        /*load google map script dynamically */
        const script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }
        document.head.appendChild(script);
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) =>  {
            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
            
        }).catch((err) =>{
          console.log(err)
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 21,
            disableDefaultUI: true,
            mapTypeControl: false
        };
        setTimeout(() => {
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'My Location';
            this.marker = new google.maps.Marker(this.markerOptions);
        }, 3000);
  }

  zoomUser(){

    this.presentToast("Button intentionally left unassigned to anything by the developer")
    // console.log(this.location)
    // let latLng = new google.maps.LatLng(
    //   this.location.lat,
    //   this.location.lng
    // );

    // // console.log(latLng)

    // this.map.PanTo(latLng);
    // this.map.setZoom(21);
  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

}
