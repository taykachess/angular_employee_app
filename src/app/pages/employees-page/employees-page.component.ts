import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss', '../../app.component.scss'],
})
export class EmployeesPageComponent {
  loading = false;
  constructor(public employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.loading = true;
    this.employeeService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
