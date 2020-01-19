import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute} from '@angular/router';
import { AppCourseComponent } from './app-course/app-course.component';
import { AppCourseListComponent } from './app-course-list/app-course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [   
  { path: 'main', component: AppCourseListComponent,canActivate: [AuthGuard]},
  { path: 'courses', component: AppCourseListComponent,canActivate: [AuthGuard]},
  { path: 'course/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },  
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {roles: ['nobody']} },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: {roles: ['nobody']} },
  { path: 'add', component: AddCourseComponent, canActivate: [AuthGuard], data: {roles: ['admin']} },
  { path: 'edit/:id', component: EditCourseComponent, canActivate: [AuthGuard], data: {roles: ['admin']} },
  { path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },  
  { path: '**', component: NotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
