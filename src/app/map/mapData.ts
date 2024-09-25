export class MarkerMapData {
    id: number
    city:string
    geocode: [number,number]
    constructor(city: string, geocode:[number,number]){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
        this.city = city
        this.geocode = geocode

    }
}


