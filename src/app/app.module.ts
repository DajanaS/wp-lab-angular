import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentManagementService} from './student-management.service';
import {StudentListComponent} from './student-list/student-list.component';
import {AppRoutingModule} from './/app-routing.module';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
