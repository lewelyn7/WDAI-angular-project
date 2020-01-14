import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Course } from '../model/course-model';
import { CoursesServiceService } from '../courses-service.service'
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(private router: ActivatedRoute, private coursesService: CoursesServiceService) { }

  ngOnInit() {
    this.course = this.coursesService.getCourse(+this.router.snapshot.url[1].path)
  }

}
