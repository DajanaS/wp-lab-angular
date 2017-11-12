import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class StudentManagementService {

  private STUDENTS = [
    new Student('Dajana', 'Stojchevska', 141178, 'KNI'),
    new Student('Student', 'Prezime', 145605, 'KNIA'),
    new Student('Ime', 'Student', 143308, 'PET'),
    new Student('St.', 'Pr.', 145329, 'IKI'),
  ];

  constructor() {
  }

  public getStudents(): Observable<Student[]> {
    return of(this.STUDENTS);
  }

  public getStudent(indeks: number): Observable<Student> {
    return of(this.STUDENTS.find(student => student.indeks === indeks));
  }

  public updateStudent(student: Student): Observable<Student> {
    const oldStudent = this.STUDENTS.find(s => s.indeks === student.indeks);
    const newStudent = Object.assign(oldStudent, student);
    return of(newStudent);
  }

  public addStudent(student: Student): Observable<Student> {
    if (!this.existsIndeks(student.indeks)) {
      this.STUDENTS.push(student);
      return of(student);
    }
    return null;
  }

  public existsIndeks(indeks: number): boolean {
    const student = this.STUDENTS.find(s => s.indeks === indeks);
    if (student == null) {
      return false;
    }
    return true;
  }
}
