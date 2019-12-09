import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from '@angular/router';
import * as firebase from "firebase";
import { LoadingController, ToastController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: "app-solutions",
  templateUrl: "./solutions.page.html",
  styleUrls: ["./solutions.page.scss"]
})
export class SolutionsPage implements OnInit {
  solutionsfiltered = [];
  solutions = [];

  constructor(public router: Router, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    interval(2000).subscribe(x => {

    })
  }

  ngOnInit() {

    this.loadingCtrl.create({message: "Fetching solutions"}).then((load) =>{
      load.present();

      firebase.database().ref('/solutions').orderByChild('vvv').once("value", snapshot => {
        this.solutions = [];
        this.solutionsfiltered = [];

        let result = snapshot.val();
        for (var key in result) {
          this.solutions.push(result[key]);
        }
        this.solutionsfiltered = this.solutions;
        this.solutionsfiltered.forEach(solution => {
          solution.joint = solution.title + " " + solution.description;
          console.log(solution.joint)
        });

        load.dismiss()
      }).catch((err) =>{
        this.presentToast(err)
      })
    })
  }

  doRefresh(event){
    this.loadingCtrl.create({message: "Fetching solutions"}).then((load) =>{
      load.present();

      firebase.database().ref('/solutions').orderByChild('vvv').once("value", snapshot => {
        this.solutions = [];
        this.solutionsfiltered = [];

        let result = snapshot.val();
        for (var key in result) {
          this.solutions.push(result[key]);
        }
        this.solutionsfiltered = this.solutions;
        this.solutionsfiltered.forEach(solution => {
          solution.joint = solution.title + " " + solution.description;
          console.log(solution.joint)
        });

        load.dismiss();
        event.target.complete();
        
      }).catch((err) =>{
        this.presentToast(err)
        event.target.complete();

      })
    })
  }
  getSearchTerm(event) {
    this.solutionsfiltered = this.filterItems(event.detail.value);
  }

  openDetails(index){

    let navigationExtras: NavigationExtras = {
      state: {
        solution: this.solutionsfiltered[index]
      }
    };

    this.router.navigate(['solutiondetails'], navigationExtras);

  }

  filterItems(searchTerm) {
    return this.solutions.filter(item => {
      return item.joint.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
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
