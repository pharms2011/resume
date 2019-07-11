import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/projects/blog/blog.component';
import { PythonChatAppComponent } from './components/projects/python-chat-app/python-chat-app.component';
import { DevJournalComponent } from './components/projects/dev-journal/dev-journal.component';
import { SkillIconsComponent } from './components/shared/skill-icons/skill-icons.component';

@NgModule({
  declarations: [BlogComponent, PythonChatAppComponent, DevJournalComponent, SkillIconsComponent],
  exports: [
    DevJournalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
