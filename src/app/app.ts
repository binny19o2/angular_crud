import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { employeeModel } from './model/employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular_crud';

  empoyeeForm: FormGroup = new FormGroup({});
  employeeObj: employeeModel = new employeeModel();
  constructor(){
    this.createForm();
  }
  createForm(){
    this.empoyeeForm=new FormGroup({
      empId: new FormControl(this.employeeObj.emp_id),
      name: new FormControl(this.employeeObj.name),
      email: new FormControl(this.employeeObj.email),
      contactNo: new FormControl(this.employeeObj.contactNo),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      pinCode: new FormControl(this.employeeObj.pinCode),
      address: new FormControl(this.employeeObj.address)
    });
  }
}
