import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

import {HotelDetails} from './result.model';

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  constructor(private http: HttpClient) { }

  getHotelsDetails(): Observable<HotelDetails>{
    return this.http.get<HotelDetails>('/assets/JSON/1010106_hotels_static_data.json');
  }
}
