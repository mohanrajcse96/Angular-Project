import { EmployeeService } from './../../service/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  empDetail!: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      salary: ['']
    });
  }

  

addEmployee() {
  console.log(this.empDetail);
  this.empObj.id = this.empDetail.value.id;
  this.empObj.name = this.empDetail.value.name;
  this.empObj.email = this.empDetail.value.email;
  this.empObj.salary = this.empDetail.value.salary;

  this.empService.addEmployee(this.empObj).subscribe(res=>{
    console.log(res);

  },err=>{
    console.log(err);
    this.getAllEmployee();
  });

 }

 getAllEmployee() {
   this.empService.getAllEmployee().subscribe(res=>{
     console.log("res",res);
   },err=>{
      console.log(err)
   });
 }
  
 editEmployee() {
  //  this.empDetail.controls['id'].setValue(emp.id);
  //  this.empDetail.controls['name'].setValue(emp.name);
  //  this.empDetail.controls['email'].setValue(emp.email);
  //  this.empDetail.controls['salary'].setValue(emp.salary);
 }

}