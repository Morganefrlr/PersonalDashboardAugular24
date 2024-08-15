
export class Bookmark{
    id: number
    title:string
    url: URL
    constructor(title: string, url:string){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
        this.url = new URL(url)
        this.title = title

    }
}