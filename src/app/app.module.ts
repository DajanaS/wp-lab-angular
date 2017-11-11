import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentManagementService} from './student-management.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
