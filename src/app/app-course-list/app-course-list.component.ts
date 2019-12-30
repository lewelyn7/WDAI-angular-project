import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course-model';
import { CoursesServiceService } from '../courses-service.service';
import { filterPipe } from './filterPipe';
@Component({
  selector: 'app-app-course-list',
  templateUrl: './app-course-list.component.html',
  styleUrls: ['./app-course-list.component.css']
})



export class AppCourseListComponent implements OnInit {

  courseFilter: Course = new Course();
  courses: Course[];
  getCourses(): Course[]{
    this.courses = this.coursesService.getCourses();
    return this.courses;
  }
  deleteCourse(course: Course){
    this.coursesService.deleteCourse(course);
    this.getCourses();
  }
  addCourse(course: Course){
    this.coursesService.addCourse(course);
    this.getCourses();
  }
  setCourseReview(event){
    console.log("setCourseReview course-list component" + event.course.name);
    event.course.rating = event.num;

  }
  updateFilters(event){
    this.courseFilter = event;
    console.log("update filters: " + this.courseFilter.name);

  }
  constructor(private coursesService: CoursesServiceService) { }

  ngOnInit() {
    this.getCourses();
  }

}
