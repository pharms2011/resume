import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumePageComponent} from './pages/resume-page/resume-page.component';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'ResumePage', component: ResumePageComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: '**', redirectTo: 'ResumePage'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
