import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCourseComponent } from './app-course/app-course.component';
import { AppCourseListComponent } from './app-course-list/app-course-list.component';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { filterPipe } from './app-course-list/filterPipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignOutComponent } from './sign-out/sign-out.component'



@NgModule({
  declarations: [
    AppComponent,
    AppCourseComponent,
    AppCourseListComponent,
    UserProfileComponent,
    AddCourseComponent,
    CourseFilterComponent,
    filterPipe,
    CourseDetailsComponent,
    RegisterComponent,
    LoginComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp();
    CoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
