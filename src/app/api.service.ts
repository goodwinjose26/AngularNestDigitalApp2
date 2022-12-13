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
  
  secValues=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addsecurity",datatosend)
  }
  viewemp =()=>
  {
    return this.http.get("http://localhost:8080/viewemp")
  }
  viewsec =()=>
  {
    return this.http.get("http://localhost:8080/viewsec")
  }

  searchemp=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/searchemp",datatosend)
  }
  deleteemployee=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteemp",datatosend)
  }
  empLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/emplogin",dataToSend)
  }
  getprofile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/profileview",dataToSend)
  }
  secLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/seclogin",dataToSend)
  }
}
