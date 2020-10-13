import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import {Observable} from 'rxjs';

import {Hotels, RequestModel} from '../form/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly _baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  capturarDados(requestModel: RequestModel): Observable<Hotels>{
    return this.http.post<Hotels>(`${this._baseUrl}/ws/rest/hotel.svc/Search`,  requestModel );
  }
}
