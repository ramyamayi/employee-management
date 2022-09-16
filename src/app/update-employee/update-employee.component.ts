import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  
"id":number 
    employee : Employee = new Employee();
      constructor(private employeeservice : EmployeeserviceService,  private route:ActivatedRoute, private router:Router) { }
  
      ngOnInit(): void {
        this.id=this.route.snapshot.params['id'];
        this.employeeservice.getEmployeeById(this.id).subscribe(data =>{
          this.employee=data;
         },error =>console.log(error));
      }
     
      
     
      onSubmit(){
        this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data =>{
        this.getEmployeeList();
        }, error =>console.log(error));
      }
        
  getEmployeeList() {
    this.router.navigate(['/employees']);
  }
    
      }


