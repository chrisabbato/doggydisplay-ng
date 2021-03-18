import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() label: string = 'Search';
  @Input() placeholder: string = 'search';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  search(value: string) {
    this.searchEvent.emit(value);
  }
}
