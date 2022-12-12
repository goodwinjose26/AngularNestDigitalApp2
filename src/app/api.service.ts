import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  
  regValues=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",datatosend)
  }
  
   addLogin=(dataToSend:any)=>
   {
     return this.http.post("http://localhost:8080/login",dataToSend)
   }
 

  
  viewemp =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  

}
