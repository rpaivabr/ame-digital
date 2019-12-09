import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoubtsPageComponent } from './doubts-page/doubts-page.component';


const routes: Routes = [
  { path: '', component: DoubtsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubtsRoutingModule { }
