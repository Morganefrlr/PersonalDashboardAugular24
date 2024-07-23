

export class Todo{
    id: number
    completed: boolean

    constructor(public text: string){
        this.id = Math.ceil(Math.random() * 10000) + Math.ceil(Math.random() * 10000)
        this.completed = false
    }
}