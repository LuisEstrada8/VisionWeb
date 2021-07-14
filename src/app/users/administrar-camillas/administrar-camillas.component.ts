import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2';
import { Costumer } from '../../models/costumer';
import { CostumerService } from '../../services/costumer.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-administrar-camillas',
  templateUrl: './administrar-camillas.component.html',
  styleUrls: ['./administrar-camillas.component.css']
})
export class AdministrarCamillasComponent implements OnInit {

  contadorIngreso=0;
  contadorEditar=0;
  contadorEliminar=0;
  public urlQR='';
  
  constructor(public costumerServices:CostumerService) { }

  ngOnInit(): void {
    this.getCostumer();
  }

  getCostumer(){
    this.costumerServices.getCostumers().subscribe(
      res => {
       this.costumerServices.costumers = res;
      },
      err => (err)
    )
  }

  addCostumer(form:NgForm){
    if(form.value._id){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego al empleado con exito',
        showConfirmButton: false,
        timer: 1500
      });
      
      this.costumerServices.editCostumer(form.value).subscribe(
        (res)=> {
        this.contadorEditar++;
        this.getCostumer();
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
      console.log(this.costumerServices.createCostumers(form.value).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego al empleado con exito',
            showConfirmButton: false,
            timer: 1500
          });
          
          this.getCostumer();
          this.contadorIngreso++;
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

  deleteCostumer(id:string){

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
        this.costumerServices.deleteCostumer(id).subscribe((res)=>{
        this.getCostumer();
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

  editCostumer(costumer:Costumer){
   this.costumerServices.selectedCostumer= costumer;
  }

  
  generate_QR(number: Number){
  this.urlQR = `https:/chart.apis.google.com/chart?cht=qr&chl=${number}&chs=450x450`;
  console.log(this.urlQR);

}

/*
imprimir_QR(){
  var element = document.getElementById('img')!;

  html2canvas(element).then((canvas)=>{

    var imgData = canvas.toDataURL('image/png')
    var doc = new jsPDF('p','pt','a4')
    
    var imgHeight = canvas.height * 208 / canvas.width;
    
    doc.addImage(imgData, 'PNG', 10,10,208,imgHeight)
    doc.save('qr_guardado')
    console.log('aqui estoy');

  })
}
*/

}
