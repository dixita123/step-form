import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../shared/detail.service';
import { ProgressService } from '../shared/progress.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contact!: FormGroup;
  width=0;
  d='a';
  constructor(
    private router:Router,
    private detail:DetailService,
    private progress:ProgressService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  next(){
    console.log(this.contact.value);
    this.detail.setPersonalDetails(this.contact);
    this.router.navigate(['/form2']);
   
  
  }
  // onSubmit(){
  //   console.log(this.contact.value);
  // }
   private initForm(){
     let _name="";
     let _email="";
     let _number="";
     this.contact=new FormGroup({
       name:new FormControl(_name,Validators.required),
       email:new FormControl(_email,[Validators.email,Validators.required]),
       number:new FormControl(_number,[Validators.minLength(10),Validators.maxLength(10),Validators.required]),

     })
     
     
   }
}
