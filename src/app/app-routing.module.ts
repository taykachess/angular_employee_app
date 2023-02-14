import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEmployeePageComponent } from './pages/create-employee-page/create-employee-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [
  { path: '', component: CreateEmployeePageComponent },
  { path: '/getAll', component: EmployeesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
