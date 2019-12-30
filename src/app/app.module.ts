import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCourseComponent } from './app-course/app-course.component';
import { AppCourseListComponent } from './app-course-list/app-course-list.component';
import { AngularFireModule } from '@angular/fire';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { filterPipe } from './app-course-list/filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    AppCourseComponent,
    AppCourseListComponent,
    UserProfileComponent,
    AddCourseComponent,
    CourseFilterComponent,
    filterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp();
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
