import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCandidatePageRoutingModule } from './details-candidate-routing.module';

import { DetailsCandidatePage } from './details-candidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCandidatePageRoutingModule
  ],
  declarations: [DetailsCandidatePage]
})
export class DetailsCandidatePageModule {}
