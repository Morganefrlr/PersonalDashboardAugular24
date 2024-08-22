
export class Bookmark{
    id: number
    title:string
    url: string
    constructor(title: string, url:string){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
        this.url = url
        this.title = title

    }
}