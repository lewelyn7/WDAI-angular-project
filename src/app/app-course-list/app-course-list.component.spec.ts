import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCourseListComponent } from './app-course-list.component';

describe('AppCourseListComponent', () => {
  let component: AppCourseListComponent;
  let fixture: ComponentFixture<AppCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
