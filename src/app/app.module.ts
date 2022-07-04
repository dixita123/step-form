import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FormComponent,
    PostComponent,
    HeaderComponent,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
