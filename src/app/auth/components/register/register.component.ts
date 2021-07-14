import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public forgot:AuthService) { }

  ngOnInit(): void {
  }

  senMail(){
    this.forgot.renviarContra().subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se envio el correo exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      err => (Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No se envio el correo verifique la conexion a internet',
        showConfirmButton: false,
        timer: 1500
      }))
    );
}
}
