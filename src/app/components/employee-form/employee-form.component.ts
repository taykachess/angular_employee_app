import { IEmployee } from '../../models/employee';
import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employee = new FormGroup<IEmployee<AbstractControl>>({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
