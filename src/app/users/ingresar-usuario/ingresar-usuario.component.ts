import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import {EmployeeService }from '../../services/employee.service'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-ingresar-usuario',
  templateUrl: './ingresar-usuario.component.html',
  styleUrls: ['./ingresar-usuario.component.css']
})
export class IngresarUsuarioComponent implements OnInit {

  contadorIngreso=0;
  contadorEditar=0;
  contadorEliminar=0;

  constructor(public employeServices:EmployeeService) { }


  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeServices.getEmployees().subscribe(
      res => {
       this.employeServices.employees = res;
      },
      err => (err)
    )
  }

  addEmployee(form:NgForm){
    if(form.value._id){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego al empleado con exito',
        showConfirmButton: false,
        timer: 1500
      });
      this.contadorEditar++;
      this.employeServices.editEmployee(form.value).subscribe(
        (res)=> {
        this.getEmployees();
        form.reset();
      },
        (err)=>  {Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Hubo algun error al agregar al empleado',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(err);
      
    }
      )


    }else{
      console.log(this.employeServices.createEmployees(form.value).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego al empleado con exito',
            showConfirmButton: false,
            timer: 1500
          });
          this.contadorIngreso++;
          this.getEmployees();
          form.reset();
        },
        err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Hubo algun error al agregar al empleado',
            showConfirmButton: false,
            timer: 1500
          });
          console.log(err);
          
        }
      )
    )
    }
  }

  deleteEmployee(id:string){

    Swal.fire({
      title:'Eliminar',
      text: 'Seguro que desea eliminar a este Heroe',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true

    }).then(data=>{
    if(data.value){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Elimino Exitosamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.contadorEliminar++;
        this.employeServices.deleteEmployee(id).subscribe((res)=>{
        this.getEmployees();
      },
      (err)=> {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se ha podido eliminar',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(err);
        
      });
    }
    });

    
  }

  editEmployee(employee:Employee){
   this.employeServices.selectedEmployee = employee;
  }


}
