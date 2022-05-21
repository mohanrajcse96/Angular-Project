import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpUrl : string;

  constructor(private http:HttpClient) { 

    this.addEmpURL = '';
    this.getEmpUrl = '';
  }

  addEmployee(emp : Employee):Observable<Employee> {
    return this.http.post<Employee>(this.addEmpURL,emp);
   }

  getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpUrl);
  }
}
