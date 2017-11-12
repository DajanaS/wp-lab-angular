import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Student} from '../model/student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnChanges {
  studentForm: FormGroup;
  currentIndeks = -1;

  @Input('student')
  public student: Student;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private studentService: StudentManagementService,
              private location: Location) {
    this.createForm();
  }

  ngOnInit() {
    this.getStudent();
    if (!this.studentService.existsIndeks(this.currentIndeks)) {
      this.location.back();
    }
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.studentForm.reset({ // same as reset() then: this.studentForm.setValue({
      ime: this.student.ime,
      prezime: this.student.prezime,
      indeks: this.student.indeks,
      nasoka: this.student.nasoka
    });
  }

  createForm() {
    this.studentForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: '',
      indeks: '',
      nasoka: ''
    });
  }

  onSubmit() {
    this.student = this.prepareSaveStudent();
    this.studentService.updateStudent(this.student).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;

    // return new Student object containing combination of original student values
    const saveStudent: Student = {
      indeks: this.student.indeks,
      ime: formModel.ime as string,
      prezime: formModel.prezime as string,
      nasoka: formModel.nasoka as string
    };
    return saveStudent;
  }

  revert() {
    this.ngOnChanges();
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
