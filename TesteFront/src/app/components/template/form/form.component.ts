import { Component, OnInit } from '@angular/core';

import { Hotels, RequestModel } from '../form/form.model';

import { FormService } from '../form/form.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  requestModel : RequestModel = {
    Credential: {
      Username: 'candidato_t4w',
      Password: 'candit@!2019',
    },
    Criteria: {
      DestinationId: null,
      NumNights: null,
      CheckinDate: new Date(),
      MainPaxCountryCodeNationality: '',
      SearchRooms: [{
        NumAdults: null,
        ChildAges: [],
        Quantity: null
      }]
    }
  }

  hotelList: Hotels;

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  capturarDados(): void {
    this.formService.capturarDados(this.requestModel).subscribe(res => {
      this.hotelList = res;
      this.router.navigate['/result']
    }, err => {
      console.log('Erro ao listar hoteis', err);
    })
  }

}
