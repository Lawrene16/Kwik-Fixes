import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutiondetailsPageRoutingModule } from './solutiondetails-routing.module';

import { SolutiondetailsPage } from './solutiondetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutiondetailsPageRoutingModule
  ],
  declarations: [SolutiondetailsPage]
})
export class SolutiondetailsPageModule {}
