import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course-model'
@Pipe({ name: 'filterPipe', pure: false})
export class filterPipe implements PipeTransform {

    transform(courses: Course[], courseFilter: Course ): Course[] {

      if (!courses) return [];

      console.log("update filters pipe: " + courseFilter.name);
      return courses.filter(course => { 
        let state: boolean = true;
        if(courseFilter.name != null && courseFilter.name != ''){
            state = state && (course.name.toLowerCase().includes(courseFilter.name.toLowerCase()))

        }
        if (courseFilter.semester != null && courseFilter.semester != ''){
            console.log("rozne od null " + courseFilter.semester);
              state = state && (course.semester.toLowerCase().includes(courseFilter.semester.toLowerCase()))
        }

        return state;
      });
    }
  }