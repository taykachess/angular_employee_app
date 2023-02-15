import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employees: IEmployee[] = [];

  // В реальном проекте, здесь должно быть обращение к API, а не симуляция
  create(employee: IEmployee): Observable<IEmployee> {
    return of(employee).pipe(
      delay(1000),
      tap((e) => this.employees.push(e))
    );

    // Старая версия

    // return new Observable((observer) => {
    //   setTimeout(() => {
    //     this.employees.push(employee);
    //     observer.next(employee);
    //   }, 1000);
    // });
  }

  getAll() {
    return of(this.employees).pipe(delay(1000));
  }
}
