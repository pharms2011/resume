import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {CoreModule} from './modules/core/core.module';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ResumeModule} from './modules/resume/resume.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    PortfolioModule,
    AppRoutingModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
