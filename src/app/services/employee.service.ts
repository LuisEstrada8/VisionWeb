import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 URL_API='http://ec2-52-14-138-51.us-east-2.compute.amazonaws.com:3500/api/employees';

  employees!:Employee[];

  selectedEmployee:Employee = {
    secondName: '',
    email: '',
    lastName: '',
    name: '',
    office: '',
    updateAt: '',
    createdAt: ''
  };
  constructor( private http:HttpClient ) { }

  getEmployees() {
   return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployees(employee:Employee){
    return this.http.post<Employee[]>(this.URL_API, employee);
  }

  deleteEmployee(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}` )
  }

  editEmployee(employee:Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

}
