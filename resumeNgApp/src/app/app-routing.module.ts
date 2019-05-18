import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumePageComponent} from './pages/resume-page/resume-page.component';

const routes: Routes = [
  {path: 'ResumePage', component: ResumePageComponent},
  {path: '**', redirectTo: 'ResumePage'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
