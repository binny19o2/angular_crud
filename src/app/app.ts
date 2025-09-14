import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  employeeForm: FormGroup = new FormGroup({});
  employeeObj: employeeModel = new employeeModel();
  employeeList: employeeModel[] = [];

  constructor(){
    this.createForm();
    const oldData = localStorage.getItem("EmpData");
     if (oldData !== null) {
    try {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    } catch (e) {
      this.employeeList = [];
    }
  }

  }
  createForm(){
    this.employeeForm=new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name,[Validators.required]),
      email: new FormControl(this.employeeObj.email),
      contactNo: new FormControl(this.employeeObj.contactNo),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      pinCode: new FormControl(this.employeeObj.pinCode),
      address: new FormControl(this.employeeObj.address)
    });
  }

  onSave(){
    const oldData = localStorage.getItem("EmpData");
    if(oldData && oldData!=="undefined"){
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length+1);
      this.employeeList.unshift(this.employeeForm.value);
      
    }
    else{
      this.employeeForm.controls['empId'].setValue(1);
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
    this.resetForm();
  }

  onEdit(item : employeeModel){
    this.employeeObj = item;
    this.createForm();
  }

  onUpdate() {
    const record = this.employeeList.find(m=> m.empId == this.employeeForm.controls["empId"].value);
    if(record){
      record.name = this.employeeForm.controls['name'].value;
      record.address = this.employeeForm.controls['address'].value;
      record.email = this.employeeForm.controls['email'].value;
      record.contactNo = this.employeeForm.controls['contactNo'].value;
      record.pinCode = this.employeeForm.controls['pinCode'].value;
    }
    localStorage.setItem("EmpData", JSON.stringify(record));
    this.employeeObj = new employeeModel();
    this.createForm();
  }

  onDelete(id: number) {
    const cfrm = confirm("Delete?");
    if (cfrm) {
      const idx = this.employeeList.findIndex(m => m.empId === id);
      if (idx > -1) {
        this.employeeList.splice(idx, 1);
        localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
      }
    }
  }

  resetForm(){
    this.employeeObj = new employeeModel;
    this.employeeForm.reset(this.employeeObj);
  }
}
