import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seclogin',
  templateUrl: './seclogin.component.html',
  styleUrls: ['./seclogin.component.css']
})
export class SecloginComponent {



  username=""
  password=""
  searchUser:any=[]
  
  constructor(private api:ApiService,private router:Router){}
  loginValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.secLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
     
        this.username=""
        this.password=""
        if(response.status=="success")
        {
          let seccode=response.userid
          console.log(seccode)
             localStorage.setItem("userInfo",seccode)
             this.router.navigate(['/secprofile'])
           
        }
        else{
          alert(response.message)
        }
       
      }
    )
    
  }
  }
  