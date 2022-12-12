import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddempComponent } from './addemp/addemp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddsecComponent } from './addsec/addsec.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewsecComponent } from './viewsec/viewsec.component';
import { SearchempComponent } from './searchemp/searchemp.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addemp",
    component:AddempComponent
  },
  {
    path:"addsec",
    component:AddsecComponent
  },
  {
    path:"viewemp",
    component:ViewempComponent
  },
  {
    path:"viewsec",
    component:ViewsecComponent
  },
  {
    path:"searchemp",
    component:SearchempComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    AdminloginComponent,
    AddempComponent,
    AddsecComponent,
    ViewempComponent,
    ViewsecComponent,
    SearchempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
