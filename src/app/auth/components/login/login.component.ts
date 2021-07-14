import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin!: FormGroup;

  
  constructor(formBuilder: FormBuilder,  private route: Router,) {

    this.formLogin = formBuilder.group({
      Correo: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  joinUser():void{
    
    if(this.formLogin.value.Correo === "" && this.formLogin.value.password === ""){
      Swal.fire({
        icon: 'warning',
        title: 'Revisa los campos',
        text: 'Verifique que los compos no esten vacios',
      });
    }if(this.formLogin.value.Correo === 'hospital.immss.mante@gmail.com' && this.formLogin.value.password === 'Admin1234.'){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido',
      });
      this.route.navigateByUrl('sidebar');
      
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Revisa los campos',
        text: 'Verifique el correo contenga los caracteres de un correo y la constraseña sea la correcta',
      });
    }
    
  }
  
}
