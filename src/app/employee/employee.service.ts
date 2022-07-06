import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  url="http://testfinal-env.eba-mpqi8rp4.us-west-1.elasticbeanstalk.com/";
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://testfinal-env.eba-mpqi8rp4.us-west-1.elasticbeanstalk.com",employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.url+id);
  }
  updateEmployeeById(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.url+employee.id,employee);
  }
  deleteEmployeeById(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.url+id);
  }

}
