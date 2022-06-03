import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value=[12,12,3,4,2,1,1,1,1,1,1,1,1,1,1,]
  constructor(private http :HttpClient) { }
  // payload={"name":"anshu"}
  ngOnInit(): void {
    this.http.get('assets/db.json').subscribe(data =>{
      console.log(data);
      
    })
      
    // this.http.post('assets/db.json',{"users":this.payload}).subscribe((data)=>{
    //   console.log("submitted");
      
    // })
  }

}
