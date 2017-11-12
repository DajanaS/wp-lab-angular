import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentAddComponent} from './student-add/student-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: StudentListComponent},
  {path: 'details/:index', component: StudentDetailsComponent},
  {path: 'details', redirectTo: '/list', pathMatch: 'full'},
  {path: 'edit/:index', component: StudentEditComponent},
  {path: 'edit', redirectTo: '/list', pathMatch: 'full'},
  {path: 'new', component: StudentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
