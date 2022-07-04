import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }
  personal!: FormGroup;
  company!: FormGroup;
  m!: FormGroup;

  setPersonalDetails(p:FormGroup){
    this.personal=p;
  }
  setCompanyDetails(c:FormGroup){
    this.company=c;
  }
  messageus(message:FormGroup){
    this.m=message;
  }
  result(){
    const result=Object.assign({},this.personal.value,this.company.value,this.m.value);
    console.log(result);
    
  }
}
