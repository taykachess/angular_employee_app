import { EmployeeService } from './../../services/employee.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  constructor(private employeeService: EmployeeService) {}

  loading = false;
  form = new FormGroup({
    firstName: new FormControl<string>(''),
    secondName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
  });

  submit() {
    this.loading = true;
    this.employeeService
      .create({
        firstName: this.form.value.firstName as string,
        secondName: this.form.value.secondName as string,
        lastName: this.form.value.lastName as string,
      })
      .subscribe((employee) => {
        this.loading = false;
        alert(
          `Сотрудник ${employee.firstName} ${employee.secondName} ${employee.lastName} создан`
        );
      });
  }
}
