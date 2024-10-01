export type Tab = {
    link:string,
    icon:string,
    classColor:string,
}

export const tabsConfig : Tab[] = [
    {
        link:"bookmarks",
        icon:'bookmarks',
        classColor:'bookmarksTab',

    },
    {
        link:"todos",
        icon:"check",
        classColor:'checkTab',

    },
    {
        link:"notes",
        icon:'notes',
        classColor:'notesTab',

    },
    {
        link:"recipes",
        icon:'local_dining',
        classColor:'recipesTab',

    },
    {
        link:'map',
        icon: 'location_on',
        classColor:'mapTab',
    },
    {
        link:'gallery',
        icon: 'image',
        classColor:'galleryTab',
    }
]