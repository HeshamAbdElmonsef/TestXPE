import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatesPageRoutingModule } from './candidates-routing.module';

import { CandidatesPage } from './candidates.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatesPageRoutingModule,
    NgxPaginationModule

  ],
  declarations: [CandidatesPage]
})
export class CandidatesPageModule {}
