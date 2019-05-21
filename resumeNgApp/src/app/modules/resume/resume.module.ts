import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import {CoreModule} from '../core/core.module';
import { BioComponent } from './components/bio/bio.component';
import { EducationComponent } from './components/education/education.component';
import {MatDividerModule, MatExpansionModule, MatFormFieldModule, MatListModule, MatTableModule} from '@angular/material';
import { CertsComponent } from './components/certs/certs.component';

@NgModule({
  declarations: [WorkHistoryComponent, SkillsComponent, BioComponent, EducationComponent, CertsComponent],
  exports: [
    SkillsComponent,
    WorkHistoryComponent,
    BioComponent,
    EducationComponent,
    CertsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
export class ResumeModule { }
