import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[]=[];
  constructor(private employeeService: EmployeeService, private router: Router) { }


  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe(data=>this.employees=data);
  }

  onClick(){
    this.router.navigate(["/add"]);
  }

}
