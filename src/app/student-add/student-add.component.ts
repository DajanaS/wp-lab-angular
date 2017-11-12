import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Student} from '../model/student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private studentService: StudentManagementService,
              private location: Location) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.studentForm = this.fb.group({
      ime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      prezime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      indeks: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      nasoka: ['', [Validators.pattern(/^(KNI|IKI|ASI|MT|PET|KNIA)$/)]]
    });
  }

  onSubmit() {
    const student = this.prepareSaveStudent();
    this.studentService.addStudent(student).subscribe(/* error handling */);
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;
    return new Student(formModel.ime as string, formModel.prezime as string, formModel.indeks as number, formModel.nasoka as string);
  }

  revert() {
    this.studentForm.reset({
      ime: '',
      prezime: '',
      indeks: '',
      nasoka: ''
    });
  }

  goBack(): void {
    this.location.back();
  }

  get ime() {
    return this.studentForm.get('ime');
  }

  get prezime() {
    return this.studentForm.get('prezime');
  }

  get indeks() {
    return this.studentForm.get('indeks');
  }

  get nasoka() {
    return this.studentForm.get('nasoka');
  }
}
