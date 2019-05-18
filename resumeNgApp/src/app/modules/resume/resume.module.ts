import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import {CoreModule} from '../core/core.module';
import { BioComponent } from './components/bio/bio.component';
import { EducationComponent } from './components/education/education.component';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [WorkHistoryComponent, SkillsComponent, BioComponent, EducationComponent],
  exports: [
    SkillsComponent,
    WorkHistoryComponent,
    BioComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatFormFieldModule
  ]
})
export class ResumeModule { }
