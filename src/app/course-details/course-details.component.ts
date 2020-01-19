import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Course } from '../model/course-model';
import { CoursesServiceService } from '../courses-service.service'
import { AuthservService } from '../authserv.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(private router: ActivatedRoute, private coursesService: CoursesServiceService, public auth: AuthservService) { }
  message: string = '';
  btnoff: boolean = false;
  signedUp: boolean = false;
  ngOnInit() {
    this.course = this.coursesService.getCourse(+this.router.snapshot.url[1].path)
    if(this.course.studentMax  == 0) this.btnoff = true;
    if(this.course.participants.indexOf(this.auth.CurrentUser().uid) !== -1){
      this.btnoff = true;
      this.signedUp = true;
    }
  }
  CountRating(course: Course){
    let sum: number = 0;
    course.votes.forEach(element => {
        sum += element.vote;
    });
    course.rating = sum/course.votes.length;

  }
  setReview(num: number){
    if(!this.signedUp) return;
    let voted: boolean = false;
    this.course.votes.forEach(element => {
        if(element.uid == this.auth.CurrentUser().uid){
          voted = true;
          element.vote = num;
        }
          
    })
    if(!voted) this.course.votes.push({uid: (this.auth.CurrentUser()).uid, vote: num});
    this.CountRating(this.course);
    console.log("course component" + this.course.rating)
  }
  signUpForCourse(): boolean{
    if(this.course.studentMax > 0 && !this.signedUp){
      this.course.studentMax--; 
      this.btnoff = true;
      this.signedUp = true;
      this.course.participants.push(this.auth.CurrentUser().uid);
      return true;

    }else{
      return false;
      
    }
  }

}
