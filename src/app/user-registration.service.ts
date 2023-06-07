import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:any){
    return this.http.post("",user,{responseType:'text'as 'json'});
  }

}
