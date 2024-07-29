

export class Note{
    id: number
    constructor(public title: string, public desc:string){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
    }
}