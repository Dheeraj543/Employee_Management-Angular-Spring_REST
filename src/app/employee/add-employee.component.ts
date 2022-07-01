import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(employee:Employee){
    this.employeeService.addEmployee(employee).subscribe(data=>{
      this.router.navigate(["/employees"]);
    });

  }
  onCancel(){
    this.router.navigate(["/employees"]);
  }

}
