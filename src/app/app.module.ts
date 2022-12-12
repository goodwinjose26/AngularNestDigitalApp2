import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
