import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course-model';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter();
  
  filterForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      name: '',
      ratingMin: 0,
      ratingMax: 0,
      ECTSpointsMin: 0,
      ECTSpointsMax: 0,
      semesterMin: 0,
      semesterMax: 0,
      type: ''
    });
  }
  change(){
    let course ={
      name: '',
      ratingMin: 0,
      ratingMax: 0,
      ECTSpointsMin: 0,
      ECTSpointsMax: 0,
      semesterMin: 0,
      semesterMax: 0,
      type: ''
    };
    course.name = this.filterForm.value.name;
    course.ratingMin = this.filterForm.value.ratingMin;
    course.ratingMax = this.filterForm.value.ratingMax;
    course.ECTSpointsMin = this.filterForm.value.ECTSpointsMin;
    course.ECTSpointsMax = this.filterForm.value.ECTSpointsMax;
    course.type = this.filterForm.value.type;
    course.semesterMin = this.filterForm.value.semesterMin;
    course.semesterMax = this.filterForm.value.semesterMax;

    this.filterChange.emit(course);


  }

}
