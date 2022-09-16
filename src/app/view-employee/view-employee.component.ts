import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
"id":number;
"employee":Employee;
  constructor(private route:ActivatedRoute,private employeeserviceService:EmployeeserviceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee= new Employee();
    this.employeeserviceService.getEmployeeById(this.id).subscribe(data =>{
this.employee=data;
    });
  }

}
