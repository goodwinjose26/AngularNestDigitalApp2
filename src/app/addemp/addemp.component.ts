import { Component } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {




  name=""
  empcode=""
  designation=""
  address=""
  email=""
  phno=""
  username=""
  password=""


  constructor(private api:ApiService) {}

  regValues=()=>
  {
    
    
    let data:any={"name":this.name,"empcode":this.empcode,"designation":this.designation,address":this.address,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.regValues(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.empcode="",this.designation="",this.address="",this.email="",this.phno="",this.username="",this.password=""
        }
        else
        {
          alert("error")
        }
      }
    )
    
    
  }

}
