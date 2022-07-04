import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  width=0;
  constructor() { }
  increaseWidth(){
    return this.width+=33.33;
  }
  decreaseWidth(){
    return this.width-=33.33;
  }
}
