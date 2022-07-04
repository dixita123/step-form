import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../shared/detail.service';
import { ProgressService } from '../shared/progress.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  width=this.progress.increaseWidth();
  company!: FormGroup;
  constructor(
    private router:Router,
    private detail:DetailService,
    private progress:ProgressService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  next(){
    console.log(this.company.value);
    this.detail.setCompanyDetails(this.company);
    this.router.navigate(['/form3'])
    
   
    
  }
  back(){
    this.router.navigate(['/'])
    this.progress.decreaseWidth();

  }

  private initForm(){
    let _company="";
    let _companytype="";
    let _address="";
    this.company=new FormGroup({
      company:new FormControl(_company,Validators.required),
      companytype:new FormControl(_companytype,Validators.required),
      address:new FormControl(_address,Validators.required),

    })
    
    
  }
}
