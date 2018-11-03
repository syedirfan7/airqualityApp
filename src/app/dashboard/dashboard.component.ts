import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public test: any;
  ngOnInit() {
    let obs = this.http.get('https://api.airvisual.com/v2/countries?key=NPJJfjaZd2GTJJaYN');
    obs.subscribe((response) => { console.log('Got the response :' + JSON.stringify(response)), this.test = JSON.stringify(response) });
    
  }

}
