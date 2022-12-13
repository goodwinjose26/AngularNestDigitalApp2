import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-secprofile',
  templateUrl: './secprofile.component.html',
  styleUrls: ['./secprofile.component.css']
})
export class SecprofileComponent {


  userid:any=""
  constructor(private api:ApiService){
     this.userid=localStorage.getItem("userInfo")
 let data:any=
 {"seccode":this.userid}
     this.api.getprofilesec(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
     )
    }
    data:any=[]

}
