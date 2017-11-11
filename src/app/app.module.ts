import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentManagementService} from './student-management.service';
import {StudentListComponent} from './student-list/student-list.component';
import {AppRoutingModule} from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
