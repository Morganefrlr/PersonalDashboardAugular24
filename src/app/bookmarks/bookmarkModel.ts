
export class Bookmark{
    id: number
    constructor(public title: string, public url:string){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
    }
}