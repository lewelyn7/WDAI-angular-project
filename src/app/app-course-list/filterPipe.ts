import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course-model'
@Pipe({ name: 'filterPipe', pure: false})
export class filterPipe implements PipeTransform {

    transform(courses: Course[], courseFilter: any ): Course[] {

      if (!courses) return [];

      console.log("update filters pipe: " + courseFilter.type);
      return courses.filter(course => { 
        let state: boolean = true;
        if(courseFilter.name != null && courseFilter.name != ''){
            state = state && (course.name.toLowerCase().includes(courseFilter.name.toLowerCase()))
            // console.log("lalalal1" + courseFilter.type)

        }
        if (courseFilter.semesterMin !== 0 && courseFilter.semesterMax !== 0){
              state = state && (course.semester >= courseFilter.semesterMin) && (course.semester <= courseFilter.semesterMax)
              // console.log("lalalal2" + courseFilter.type)

        }
        if (courseFilter.ECTSpointsMin !== 0 && courseFilter.ECTSpointsMax !== 0){
          state = state && (course.ECTSpoints >= courseFilter.ECTSpointsMin) && (course.ECTSpoints <= courseFilter.ECTSpointsMax)
          // console.log("lalalal2" + courseFilter.type)

        }
        if (courseFilter.ratingMin !== 0 && courseFilter.ratingMax !== 0){
          state = state && (course.rating >= courseFilter.ratingMin) && (course.rating <= courseFilter.ratingMax)
          // console.log("lalalal2" + courseFilter.type)

        }
        if(courseFilter.type != null && courseFilter.type != ''){
          // console.log("lalalal4" + courseFilter.type)
          state = state && (course.type  == courseFilter.type )
        } 
        return state;
      });
    }
  }