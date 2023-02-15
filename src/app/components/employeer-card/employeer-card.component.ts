import { IEmployee } from './../../models/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeer-card',
  templateUrl: './employeer-card.component.html',
  styleUrls: ['./employeer-card.component.scss'],
})
export class EmployeerCardComponent {
  employees: IEmployee[] = [];
}
