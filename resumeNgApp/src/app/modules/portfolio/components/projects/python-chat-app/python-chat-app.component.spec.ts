import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonChatAppComponent } from './python-chat-app.component';

describe('PythonChatAppComponent', () => {
  let component: PythonChatAppComponent;
  let fixture: ComponentFixture<PythonChatAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonChatAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
