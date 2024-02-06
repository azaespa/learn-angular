import { Component } from '@angular/core';
import { Employee } from 'src/shared/model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Array of Employees
  employees : Employee[] = [
    new Employee("476995", "Paul James", "Azanes"),
    new Employee("476996", "James Reid", "Azanes"),
    new Employee("476997", "John John", "Azanes")
  ]

  newEmployeeId = '';
  newFirstName = '';
  newLastName = '';

  title = 'data-manager';

  addNewEmployee() {
    this.employees.push(new Employee(this.newEmployeeId, this.newFirstName, this.newLastName));
    this.newEmployeeId = '';
    this.newFirstName = '';
    this.newLastName = '';
  }

}
