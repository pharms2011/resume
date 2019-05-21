import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  college: string;
  major: string;
  start: string;
  end: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    college: 'Colorado State University',
    major: 'Bachelors of Science in Applied Computing Technology',
    start: 'August 2011',
    end: 'May 2013'
  },
  {
    college: 'University of Northern Colorado',
    major: 'Bachelors of Science in Applied Mathematics',
    start: 'August 2013',
    end: 'May 2015'
  },
  {
    college: 'Georgia Tech'
  , major: 'Online Master in Computer Science',
    start: 'August 2019',
    end: 'Current'
  }
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  displayedColumns: string[] = ['college', 'major', 'start', 'end'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
