import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course-model'
import { Router } from '@angular/router'
import { AuthservService } from '../authserv.service';

@Component({
  selector: 'app-app-course',
  templateUrl: './app-course.component.html',
  styleUrls: ['./app-course.component.css']
})
export class AppCourseComponent implements OnInit {
  @Input() course;
  @Output() notify = new EventEmitter();
  @Output() review = new EventEmitter();
  
  
  
  constructor(public router: Router, private auth: AuthservService) { }
  setReview(num: number){
    
    console.log("course component" + this.course.name)
    this.review.emit({course:this.course, num: num});
  }
  courseDetails(){
    this.router.navigate(['/course', this.course.id])
  }
  editCourse(){
    this.router.navigate(['/edit', this.course.id])    
  }
  ngOnInit() {
  }

}
