import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getSeattle() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle,us&APPID=c7ff59a19363bee6c0847ead0a8061ad')
  }

  getSanJose() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=san&jose,us&APPID=c7ff59a19363bee6c0847ead0a8061ad');
  }

  getBurbank() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank,us&APPID=c7ff59a19363bee6c0847ead0a8061ad');
  }

  getDallas() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas,us&APPID=c7ff59a19363bee6c0847ead0a8061ad');
  }

  getDC() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=washington&dc,us&APPID=c7ff59a19363bee6c0847ead0a8061ad')
  }

}
