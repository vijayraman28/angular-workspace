import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
    name: "Mark",
    gender: "Male",
    email: "mark@gmail.com",
    contactPreference: "email",
    dateofBirth: new Date(),
    department: "IT",
    isActive: true,
    photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
    name: "Mary",
    gender: "Female",
    phoneNumber: "9900099000",
    contactPreference: "Phone",
    dateofBirth: new Date(),
    department: "HR",
    isActive: true,
    photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
    name: "John",
    gender: "Male",
    phoneNumber: "9900399002",
    contactPreference: "Phone",
    dateofBirth: new Date(),
    department: "IT",
    isActive: false,
    photoPath: 'assets/images/john.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
