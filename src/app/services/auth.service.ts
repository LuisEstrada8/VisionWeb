import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  body = "";
  private URL ='http://ec2-52-14-138-51.us-east-2.compute.amazonaws.com:3500/api/users/send-email';

  constructor( private http: HttpClient) { }

  renviarContra(){
    return this.http.post(this.URL, this.body);
  }
}
