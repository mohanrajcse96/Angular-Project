import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpUrl : string;
  public BASE_URL = environment.BASE_URL
  
  constructor(private http:HttpClient) { 

    this.addEmpURL = 'https://jsonplaceholder.typicode.com/posts';
    this.getEmpUrl = '';
  }

  addEmployee(emp : Employee):Observable<Employee> {
    
    return this.http.post<Employee>(this.addEmpURL,emp);
   }

  getAllEmployee(){
    return this.http.get(`${this.BASE_URL}`)
  }
}
