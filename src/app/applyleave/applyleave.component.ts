import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent {

  empcode=localStorage.getItem("userInfo")
  leavetype=""
  remarks=""
  fromdate=""
  todate=""
  applydate=""
  
  constructor(private api:ApiService ,private route:Router){}
  readValues=()=>{
    let data:any={
      "empcode":this.empcode,
      "leavetype":this.leavetype,
      "remarks":this.remarks,
      "fromdate":this.fromdate,
      "todate":this.todate,
      "applydate":this.applydate
    }
    console.log(data)
    if(this.leavetype != "" && this.fromdate != "" && this.todate != "" && this.applydate != ""){
    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Applied Successfully")
          this.leavetype=""
          this.remarks=""
          this.fromdate=""
          this.todate=""
          this.applydate=""
          this.route.navigate(['/empprofile'])
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
  else{
    alert("Empty fields")
  
  }
}
}