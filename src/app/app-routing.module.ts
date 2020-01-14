import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouter } from '@angular/router';
import { AppCourseComponent } from './app-course/app-course.component';
import { AppCourseListComponent } from './app-course-list/app-course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [   
  { path: 'main', component: AppCourseListComponent,canActivate: [AuthGuard]},
  { path: 'course/:id', component: CourseDetailsComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },  
  { path: '**', component: AppCourseListComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
