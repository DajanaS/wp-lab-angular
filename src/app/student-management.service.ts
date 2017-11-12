import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class StudentManagementService {

  constructor() {
  }

  private STUDENTS = [{
    ime: 'Dajana',
    prezime: 'Stojchevska',
    indeks: 141178,
    nasoka: 'KNI'
  }, {
    ime: 'Ime na student',
    prezime: 'Prezime na student',
    indeks: 151076,
    nasoka: 'KNI'
  }, {
    ime: 'Student I',
    prezime: 'Prezime I',
    indeks: 160198,
    nasoka: 'KNI'
  }, {
    ime: 'Student II',
    prezime: 'Prezime II',
    indeks: 175108,
    nasoka: 'KNI'
  }];

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

  public existsIndeks(indeks: number): boolean {
    const student = this.STUDENTS.find(s => s.indeks === indeks);
    if (student == null) {
      return false;
    }
    return true;
  }
}
