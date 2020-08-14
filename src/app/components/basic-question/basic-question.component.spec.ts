import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQuestionComponent } from './basic-question.component';

describe('BasicQuestionComponent', () => {
  let component: BasicQuestionComponent;
  let fixture: ComponentFixture<BasicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
