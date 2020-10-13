export interface HotelDetails{
    sort: Function;
    id:number,
    name:string,
    chainName:string,
    chainId:number,
    category:number,
    urlThumb:string,
    cityNamePT:string,
    cityNameEN:string,
    cityNameES:string,
    cityId:number,
    latitude:number,
    longitude:number,
    taRatingImageUrl:string,
    taRating:number,
    taNumReviews:number,
    percentRecommended:number,
    localizations:[],
    address:string,
    website:string,
    typePT:string,
    typeEN:string,
    typeES:string,
    price:Array<[number]>
}

