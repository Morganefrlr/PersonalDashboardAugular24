export class ToDo {
    id: number;
    title: string;
    constructor(
        id:number= 0,
        title: string = 'Entrer votre tache...'
    ) {
        this.id = id;
        this.title = title;
    }
}


export const FAKETODOS: ToDo[] = [
    {
        id: 1,
        title: "Meeting Room 201",
    },
    {
        id: 2,
        title: "Reply to my emails",
    },
    {
        id: 3,
        title: "Yoga, 30 minutes",
    },
    {
        id: 4,
        title: "Create a new project, brainstorming 1 hour",

    },
]