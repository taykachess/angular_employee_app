import { IEmployee } from './../../models/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeer-form',
  templateUrl: './employeer-form.component.html',
  styleUrls: ['./employeer-form.component.scss'],
})
export class EmployeerFormComponent {
  employee!: IEmployee;
}
