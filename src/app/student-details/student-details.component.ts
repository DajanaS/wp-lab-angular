import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Student} from '../model/student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input('student')
  public student: Student;
  currentIndeks = -1;

  constructor(private route: ActivatedRoute,
              private studentService: StudentManagementService,
              private location: Location) {
  }

  ngOnInit() {
    this.getStudent();
    if (!this.studentService.existsIndeks(this.currentIndeks)) {
      this.location.back();
    }
  }

  getStudent(): void {
    const index = +this.route.snapshot.paramMap.get('index');
    this.studentService.getStudent(index).subscribe(student => this.student = student);
    this.currentIndeks = +this.route.snapshot.paramMap.get('index');
  }

  goBack(): void {
    this.location.back();
  }

}
