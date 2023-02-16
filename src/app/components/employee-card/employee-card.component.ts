import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from '../../models/employee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() employee: IEmployee;
  @Input() index: Number;

  deleting = false;

  constructor(public employeeService: EmployeeService) {}

  delete(id: string | number) {
    this.deleting = true;
    this.employeeService.delete(id).subscribe(() => {
      this.deleting = false;
    });
  }
}
