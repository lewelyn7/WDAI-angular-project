import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course-model';
import { CoursesServiceService } from '../courses-service.service'
import { AuthservService } from '../authserv.service'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  modelForm : FormGroup;
  course: Course;
  message: string = '';



  constructor(private formBuilder : FormBuilder, private coursesService: CoursesServiceService, auth: AuthservService) {

    this.modelForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageURL: ['https://via.placeholder.com/200', [Validators.required]],
      semester: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
      studentMax: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
      type: '',
      ECTSpoints: ['', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
    });
   }

  ngOnInit() {

  }
  addCourse(){
    if(!this.modelForm.valid){
      return;
    }
    this.course = new Course(this.coursesService.getNextID());
    this.course.name = this.modelForm.value.name;
    this.course.description = this.modelForm.value.description;
    this.course.rating = this.modelForm.value.rating;
    this.course.imageURL = this.modelForm.value.imageURL;
    this.course.semester = this.modelForm.value.semester;
    this.course.studentMax = this.modelForm.value.studentMax;
    this.course.type = this.modelForm.value.type;
    this.course.ECTSpoints = this.modelForm.value.ECTSpoints;
    this.course.votes = [];
    this.modelForm.reset();
    this.coursesService.addCourse(this.course);
    this.message = "Kurs został dodany";

  };

}
