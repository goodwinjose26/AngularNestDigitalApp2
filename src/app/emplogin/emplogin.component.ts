import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {


  username=""
  password=""
  searchUser:any=[]
  
  constructor(private api:ApiService,private router:Router){}
  loginValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.empLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
     
        this.username=""
        this.password=""
        if(response.status=="success")
        {
          let empcode=response.userid
          console.log(empcode)
             localStorage.setItem("userInfo",empcode)
             this.router.navigate(['/empprofile'])
           
        }
        else{
          alert(response.message)
        }
       
      }
    )
    
  }
  }
  