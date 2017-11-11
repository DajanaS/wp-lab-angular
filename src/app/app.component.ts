import {Component, OnInit} from '@angular/core';
import {Student} from './model/student';
import {StudentManagementService} from './student-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab 1 - Student Management Service';
  public students: Student[];
  public currentStudent: Student;

  constructor(private studentService: StudentManagementService) {

  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  showStudent(student: Student) {
    this.currentStudent = student;
  }
}

