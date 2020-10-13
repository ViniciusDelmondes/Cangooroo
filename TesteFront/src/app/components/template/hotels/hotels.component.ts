import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  @Input() name: string;
  @Input() locale: string;
  @Input() thumb: string;
  @Input() rating: string;
  @Input() ratingImg: string;
  @Input() price: Array<[number]>;
  @Input() category: string;
  @Input() website: string;
  @Input() lat: number;
  @Input() lgn: number;

  constructor() { }

  ngOnInit(): void {
  }
}
