import { Injectable } from '@angular/core'; 
import { Course } from './model/course-model'
import { COURSES } from './mock-data';
@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  getCourses(): Course[]{
    return COURSES;
  }

  getCourse(id: number){
    return COURSES[id];
  }
  deleteCourse(course: Course){
    COURSES.splice(COURSES.indexOf(course), 1);
  }
  addCourse(course: Course){
    COURSES.push(course);
  }
  constructor() { }
}
