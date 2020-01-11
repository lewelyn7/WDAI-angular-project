import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course-model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Output() add = new EventEmitter();
  modelForm : FormGroup;
  course: Course = new Course;



  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.modelForm = this.formBuilder.group({
      name: '',
      description: '',
      rating: '',
      imageURL: '',
      semester: 'POLAND',
      studentMax: '',
      type: ''
    });
  }
  addCourse(){
    this.course.name = this.modelForm.value.name;
    this.course.description = this.modelForm.value.description;
    this.course.rating = this.modelForm.value.rating;
    this.course.imageURL = this.modelForm.value.imageURL;
    this.course.semester = this.modelForm.value.semester;
    this.course.studentMax = this.modelForm.value.studentMax;
    this.course.type = this.modelForm.value.type;
    this.add.emit(this.course);
    this.course = new Course;
    this.modelForm.reset();
  };

}
