import { Injectable } from '@angular/core'; 
import { Course } from './model/course-model'
import { COURSES } from './mock-data';
@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  maxID: number;
  courses: Course[];
  getCourses(): Course[]{
    
    return this.courses;

  }
  testingFunc(element, index, array){
    return (element.id == this);
  }
  getCourse(id: number){
    return this.courses.find(this.testingFunc, id);
  }
  deleteCourse(course: Course){
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  addCourse(course: Course){
    this.courses.push(course);
  }
  getNextID(){
    this.maxID++;
    return this.maxID;
  }
  constructor() {
    let max = 0;
    this.courses = COURSES;
    this.courses.forEach(elem => {
      if(elem.id > max){
        max = elem.id;
      }
    })
    this.maxID = max;
   }
}
