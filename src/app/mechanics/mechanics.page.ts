import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as firebase from "firebase";
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.page.html',
  styleUrls: ['./mechanics.page.scss'],
})
export class MechanicsPage implements OnInit {

  engineers = []
  engineersfiltered = [];

  constructor(public callNumber: CallNumber, 
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) { 
    this.engineersfiltered = this.engineers;
  }

  ngOnInit() {
    this.fetchEngineers()

  }

  doRefresh(event) {
    this.fetchEngineers()

    this.loadingCtrl.create({message: "Fetching Engineers"}).then((load) =>{
      load.present();

      firebase.database().ref('/engineers').orderByChild('vvv').once("value", snapshot => {
        this.engineers = [];
        this.engineersfiltered = [];

        let result = snapshot.val();
        for (var key in result) {
          this.engineers.push(result[key]);
        }
        this.engineersfiltered = this.engineers;

        this.engineersfiltered.forEach(engineer => {
          engineer.joint = engineer.name + " " + engineer.phonenumber+ " " + engineer.location;
        });

        load.dismiss()
        event.target.complete();
        
      }).catch((err) =>{
        this.presentToast(err);
        event.target.complete();

      })
    })

    this.engineers.forEach(engineer =>{
      engineer.joint = engineer.name + " " + engineer.phonenumber+ " " + engineer.location;
    })
  }

  fetchEngineers(){
    this.loadingCtrl.create({message: "Fetching Engineers"}).then((load) =>{
      load.present();

      firebase.database().ref('/engineers').orderByChild('vvv').once("value", snapshot => {
        this.engineers = [];
        this.engineersfiltered = [];

        let result = snapshot.val();
        for (var key in result) {
          this.engineers.push(result[key]);
        }
        this.engineersfiltered = this.engineers;

        this.engineersfiltered.forEach(engineer => {
          engineer.joint = engineer.name + " " + engineer.phonenumber+ " " + engineer.location;
        });

        load.dismiss()
      }).catch((err) =>{
        this.presentToast(err)
      })
    })

    this.engineers.forEach(engineer =>{
      engineer.joint = engineer.name + " " + engineer.phonenumber+ " " + engineer.location;
    })
  }
  getSearchTerm(event){
    this.engineersfiltered = this.filterItems(event.detail.value);
  }

  filterItems(searchTerm){
    return this.engineers.filter(item => {
      return item.joint.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  contact(engineer){
    console.log(engineer);

    this.callNumber.callNumber(engineer.phonenumber, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
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
