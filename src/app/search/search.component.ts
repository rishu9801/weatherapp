import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() userInput: string = '';

  @Output() cityInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setCityEnter(value: string, e: any) {
    this.cityInput.emit(value);
    e.target.blur();
    e.target.value = '';
  }
  setCityClick(value: string) {
    this.cityInput.emit(value);
  }
}
