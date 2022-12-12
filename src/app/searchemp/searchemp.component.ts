import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemp',
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.css']
})
export class SearchempComponent {


  constructor(private api:ApiService,private router:Router) {}
  empcode=""
  sdata:any=[]
readValue=()=>
{
  let data =
  {
    "empcode":this.empcode
  }
  console.log(data)
  this.api.searchemp(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
         alert("no data")
      }
      else {

        this.sdata=response

      }
    }
  )
}

deleteBtnClick=(id:any)=>
{
  let data:any={
    "id":id
  }
    this.api.deleteemployee(data).subscribe(
      (generated:any)=>
      {
        console.log(generated)
        if(generated.status == "success")
        {
          alert("Student Deleted")
          this.router.navigate(["/viewemp"])
        }
        else{
          alert("error")
        }
      }
    )
    
     
         
}


}
