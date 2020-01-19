import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course-model';
import { CoursesServiceService } from '../courses-service.service'
import { AuthservService } from '../authserv.service'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  modelForm : FormGroup;
  course: Course;
  message: string = '';


  constructor(private formBuilder : FormBuilder, private coursesService: CoursesServiceService, private auth: AuthservService, private router: ActivatedRoute) {
    this.course = this.coursesService.getCourse(+this.router.snapshot.url[1].path)

    this.modelForm = this.formBuilder.group({
      name: [this.course.name, [Validators.required]],
      description: [this.course.description, [Validators.required]],
      imageURL: [this.course.imageURL, [Validators.required]],
      semester: [this.course.semester, [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
      studentMax: [this.course.studentMax, [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
      type: this.course.type,
      ECTSpoints: [this.course.ECTSpoints, [Validators.required, Validators.min(0), Validators.pattern('[0-9]*')]],
    });
   }


  ngOnInit() {
  }

  editCourse(){
    if(!this.modelForm.valid){
      return;
    }
    this.course.name = this.modelForm.value.name;
    this.course.description = this.modelForm.value.description;
    this.course.rating = this.modelForm.value.rating;
    this.course.imageURL = this.modelForm.value.imageURL;
    this.course.semester = this.modelForm.value.semester;
    this.course.studentMax = this.modelForm.value.studentMax;
    this.course.type = this.modelForm.value.type;
    this.course.ECTSpoints = this.modelForm.value.ECTSpoints;
    this.course.votes = [];
    this.message = "Kurs został zeedytowany";
  };

}
