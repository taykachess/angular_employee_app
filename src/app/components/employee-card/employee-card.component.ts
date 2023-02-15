import { IEmployee } from '../../models/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  employees: IEmployee[] = [];
}
