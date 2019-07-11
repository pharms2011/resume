import { Component, OnInit } from '@angular/core';
import {Skill} from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Languages: Skill[];
  JavaFrameworks: Skill[];
  FrontEndTechnologies: Skill[];
  BackEndTechnologies: Skill[];

  constructor() { }

  ngOnInit() {
    this.Languages = [
      {name: 'Java'},
      {name: 'Python'},
      {name: 'C#'},
      {name: 'C'}
    ];
    this.JavaFrameworks = [
      {name: 'Hibernate'},
      {name: 'Spring'},
      {name: 'JUnit'}
    ];
    this.FrontEndTechnologies = [
      {name: 'Angular'},
      {name: 'React'},
      {name: 'CSS'},
      {name: 'HTML'},
      {name: 'JavaScript'},
      {name: 'TypeScript'}
    ];
    this.BackEndTechnologies = [
      {name: 'Oracle SQL'},
      {name: 'Postgres SQL'},
      {name: 'HQL'}
    ];
  }

}
