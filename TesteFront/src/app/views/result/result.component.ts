import { Component, OnInit } from '@angular/core';

import {ResultService} from './result.service';

import {HotelDetails} from './result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  hotelsList: HotelDetails;

  constructor(public service: ResultService) { }

  ngOnInit(): void {
    this.getHotelsDetails() 
  }

  getHotelsDetails(){
    this.service.getHotelsDetails().subscribe(res => {
      this.hotelsList = res;
    });
  }

  orderByPrice(){
    this.hotelsList.sort((a, b) => {
      return a.price - b.price;
    })
  }

}


