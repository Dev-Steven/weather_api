import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sj',
  templateUrl: './sj.component.html',
  styleUrls: ['./sj.component.css']
})
export class SjComponent implements OnInit {

  city: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.callWeather();
  }

  callWeather() {
    this._httpService.getSanJose().subscribe(data => {
      console.log(data);
      this.city = data;
    })
  }

}
