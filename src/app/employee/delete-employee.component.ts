import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employee!:Employee;

  constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(id).subscribe(data=>{
      this.employee=data;
    });
  }
  onDelete(){
    this.employeeService.deleteEmployeeById(this.employee.id).subscribe(data=>{
      this.router.navigate(["employees"]);
    });
  }
  onCancel(){
    this.router.navigate(["/employees"]);
  }
}
