import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solutiondetails',
  templateUrl: './solutiondetails.page.html',
  styleUrls: ['./solutiondetails.page.scss'],
})
export class SolutiondetailsPage implements OnInit {

  data;
  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.solution;

        console.log(this.data);
      }
    });
  }

}
