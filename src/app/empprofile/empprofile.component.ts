import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent {

  userid:any=""
  constructor(private api:ApiService){
     this.userid=localStorage.getItem("userInfo")
 let data:any=
 {"empcode":this.userid}
     this.api.getprofile(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
     )
    }
    data:any=[]

}
