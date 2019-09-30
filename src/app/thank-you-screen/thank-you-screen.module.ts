import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThankYouScreenPage } from './thank-you-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ThankYouScreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThankYouScreenPage]
})
export class ThankYouScreenPageModule {}
