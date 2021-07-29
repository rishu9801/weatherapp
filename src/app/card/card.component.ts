import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  data: any;
  addClass: any;
  icon: any;

  @Input() city = 'patna';

  constructor(private weatherData: WeatherDataService) {}

  ngOnInit(): void {
    this.Search(this.city);
  }

  Search(city: string) {
    this.weatherData
      .getData(city)
      .subscribe(d => {this.data = d },err=> console.warn('wrong city!!',err));
  }
  

  degToCompass(num: number) {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    return arr[val % 16];
  }

  bg(d: any) {
    if (d.includes('n')) {
      this.addClass = 'bgNight card';
      return this.addClass;
    } else if (d.includes('d')) {
      this.addClass = 'bgDay card';
      return this.addClass;
    }
  }

  setIcon(i: any) {
    i = parseInt(i);
    this.icon = `../../assets/images/${i}.png`;
    return this.icon;
  }
}
