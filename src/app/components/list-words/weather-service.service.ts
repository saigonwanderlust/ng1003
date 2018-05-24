import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=SaiGon';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getTemp() {
    this.http.get(URL)
      .toPromise()
      .then(res => res.json())
      .then(resJson => console.log(resJson.main.temp));
  }

}

// ng g s components/list-words/weather
