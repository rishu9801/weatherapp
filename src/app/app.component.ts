import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather';
  city = '';
  cityData: any;
  cities = ['delhi', 'patna', 'kota', 'mumbai'];

  constructor() {}

  ngOnInit() {}

  setCity(i: string) {
    this.city = i;
  }
}
