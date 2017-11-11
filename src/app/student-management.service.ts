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
}
