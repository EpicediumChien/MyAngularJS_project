import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Content1Component } from './content1/content1.component';
import { WarningAlertComponent } from './warning.alert/warning.alert.component';
import { SuccessAlertComponent } from './success.alert/success.alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Content1Component,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
