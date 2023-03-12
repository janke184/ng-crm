import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(
    private be: BackendService
  ) { 

  }
  
  ngOnInit(): void {
    this.be.getConnectedUser().subscribe( res => {
      console.log(res);
    });
  }

}
