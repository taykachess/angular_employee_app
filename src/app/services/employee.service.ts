import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { IEmployee } from '../models/employee';
import { employees as data } from '../data/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employees: IEmployee[] = [];

  // В реальном проекте, здесь должно быть обращение к API, а не симуляция
  create(employee: Omit<IEmployee, 'id'>): Observable<IEmployee> {
    // Генерация id элемента у сотрудника (серверная операция), чтобы удалять сотрудника по id
    const generatedId = Math.random().toString(36).slice(2, 7);

    return of({ ...employee, id: generatedId }).pipe(
      delay(1000),
      tap((e) => this.employees.push(e))
    );
  }

  getAll() {
    // Приходят данные якобы с сервера
    this.employees = data;
    return of(this.employees).pipe(delay(1000));
  }

  delete({ id }: Pick<IEmployee, 'id'>): Observable<IEmployee> {
    // Серверная операция по удалению работника
    const index = this.employees.findIndex((e) => e.id === id);
    // Сервер возвращает работника this.employees[index]

    return of(this.employees[index]).pipe(
      delay(1000),
      tap((empl) => {
        // Удаление сотрудника на клиенте,  специально повторил операцию по поиску индекса
        const index = this.employees.findIndex((e) => e.id === empl.id);
        this.employees.splice(index, 1);
      })
    );
  }
}
