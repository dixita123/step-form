import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../shared/progress.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private progress:ProgressService
  ) {

   }
  
  ngOnInit(): void {
  }


}
