import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgForComponent } from './ng-for/ng-for.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    Assignment1Component,
    Assignment2Component,
    CockpitComponent,
    ServerElementComponent,
    DataBindingComponent,
    NgForComponent
    ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
