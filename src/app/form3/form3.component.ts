import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../shared/detail.service';
import { ProgressService } from '../shared/progress.service';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  width=this.progress.increaseWidth();
   message!: FormGroup;
  constructor(
    private router:Router,
    private detail:DetailService,
    private progress:ProgressService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  back(){
    this.progress.decreaseWidth();
   this.router.navigate(['/form2'])
   
  }
  onSubmit(){
    this.progress.increaseWidth();
    alert('Success');
    console.log(this.message.value);
    this.detail.messageus(this.message);
    this.detail.result();

    this.router.navigate(['/'])

    
  }
  private initForm(){
    let _title="";
    let _description="";
 
    this.message=new FormGroup({
      title:new FormControl(_title,Validators.required),
      description:new FormControl(_description,Validators.required),
     

    })
  }

}
