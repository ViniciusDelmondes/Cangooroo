export interface Hotels {
  Error: string,
  TimeSpan: Date,
  Token: string,
  TotalTime: number,
  Hotels: [
    {
      HotelId: number,
      IsRecommended: boolean,
      Rooms: [
        {
          BoardDescription: string,
          CancellationPolicies: string,
          ChildAges: number[],
          CustomFields: string,
          Id: number,
          IsAvailable: boolean,
          IsPrePayment: boolean,
          MoreInformation: string,
          NumAdults: number,
          PayDirectToHotel: boolean,
          Quantity: number,
          RoomDescription: string,
          SellingPricePerRoom: {
            Currency: string,
            Value: number
          },
          TotalSellingPrice: {
            Currency: string,
            Value: number
          }
        }
      ]
    }
  ]
}

export interface RequestModel {
  Credential: {
    Username: string,
    Password: string
  },
  Criteria: {
    DestinationId: number,
    NumNights: number,
    CheckinDate: Date,
    MainPaxCountryCodeNationality: string,
    SearchRooms: [{
      NumAdults: number,
      ChildAges: number[],
      Quantity: number
    }]
  }
};