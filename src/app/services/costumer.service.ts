import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Costumer } from '../models/costumer';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

 URL_API='http://ec2-52-14-138-51.us-east-2.compute.amazonaws.com:3500/api/costumers';

  costumers!:Costumer[];

  selectedCostumer:Costumer = {
    number: 0 ,
    pacientName: '' ,
    pacientSecondName: '',
    pacientLastName: '',
    docotAsign: '',
    typeOperation: '',
    typeOfDiet: '',
    updateAt: '',
    createdAt: '',
    
  };
  constructor( private http:HttpClient ) { }

  getCostumers() {
   return this.http.get<Costumer[]>(this.URL_API);
  }

  createCostumers(costumer:Costumer){
    return this.http.post<Costumer[]>(this.URL_API, costumer);
  }

  deleteCostumer(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}` )
  }

  editCostumer(costumer:Costumer){
    return this.http.put(`${this.URL_API}/${costumer._id}`, costumer);
  }

}

