import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsec',
  templateUrl: './addsec.component.html',
  styleUrls: ['./addsec.component.css']
})
export class AddsecComponent {





  name=""
  seccode=""
  address=""
  email=""
  phno=""
  username=""
  password=""


  constructor(private api:ApiService) {}

  secvalues=()=>
  {
    
    
    let data:any={"name":this.name,"seccode":this.seccode,"address":this.address,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.secValues(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.seccode="",this.address="",this.email="",this.phno="",this.username="",this.password=""
        }
        else
        {
          alert("error")
        }
      }
    )
    
    
  }

}
