import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  city: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.callWeather();
  }

    callWeather() {
      this._httpService.getSeattle().subscribe(data => {
        console.log(data);
        this.city = data;
      })
    }
}
