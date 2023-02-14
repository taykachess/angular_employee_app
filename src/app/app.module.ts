import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { CreateEmployeePageComponent } from './pages/create-employee-page/create-employee-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateEmployeePageComponent,
    EmployeesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
