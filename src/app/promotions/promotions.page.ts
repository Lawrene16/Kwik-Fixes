import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { LoadingController } from '@ionic/angular';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  
  promotions = [];
  sub:Subscription;
  constructor(public loadingCtrl: LoadingController) { 
    interval(10000).subscribe(x => {
      firebase.database().ref('/promotions').orderByChild('vvv').once("value", snapshot => {
        this.promotions = [];
  
        let result = snapshot.val();
        for (var key in result) {
          this.promotions.push(result[key]);
        }
      }).then((err) =>{
        console.log(err);
      })


    })
  }

  ngOnInit() {
    this.loadingCtrl.create({message: "Loading Promotions"}).then((load) =>{
      load.present()
      firebase.database().ref('/promotions').orderByChild('vvv').once("value", snapshot => {
        this.promotions = [];
  
        let result = snapshot.val();
        for (var key in result) {
          this.promotions.push(result[key]);
        }

        load.dismiss();
      }).then((err) =>{
        console.log(err);
        load.dismiss();
      })


    })
  }
}
