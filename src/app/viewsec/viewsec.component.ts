import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsec',
  templateUrl: './viewsec.component.html',
  styleUrls: ['./viewsec.component.css']
})
export class ViewsecComponent {



  constructor(private api:ApiService)
  {
    api.viewsec().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
