import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig:Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateofBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  }

departments: Department[] = [
  {id: 1, name: 'Help Desk'},
  {id: 2, name: 'HR'},
  {id: 3, name: 'IT'},
  {id: 4, name: 'Payroll'}
];
 
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
   }

   togglePhotoPreview(){
     this.previewPhoto = !this.previewPhoto;
   }

  ngOnInit() {
  }

  saveEmployee(Newemployee: Employee): void{
    console.log("inside",Newemployee)
  }
}
