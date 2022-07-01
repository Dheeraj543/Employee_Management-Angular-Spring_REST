import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(url);
  }
  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(url,employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(url+id);
  }
  updateEmployeeById(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(url+employee.id,employee);
  }
  deleteEmployeeById(id:number):Observable<Employee>{
    return this.http.delete<Employee>(url+id);
  }

}
