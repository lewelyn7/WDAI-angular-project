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
      rating: '',
      ECTSpoints: '',
      semester: '',
      type: ''
    });
  }
  change(){
    let course = new Course;
    course.name = this.filterForm.value.name;
    course.rating = this.filterForm.value.rating;
    course.ECTSpoints = this.filterForm.value.ECTSpoints;
    course.type = this.filterForm.value.type;
    course.semester = this.filterForm.value.semester;
    this.filterChange.emit(course);


  }

}
