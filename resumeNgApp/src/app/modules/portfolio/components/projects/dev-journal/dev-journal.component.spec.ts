import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevJournalComponent } from './dev-journal.component';

describe('DevJournalComponent', () => {
  let component: DevJournalComponent;
  let fixture: ComponentFixture<DevJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
