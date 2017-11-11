import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

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
