export default {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'Name',
            type: 'string',
            description: 'dette er navnet på skuespilleren'
        },{
            type: 'slug',
            name: 'slugName',
            title: 'Navn på slug',
            description: 'dette er også info om skuespilleren',
            options: {
                source: 'Name',
                slugify: (input) =>
                input.toLowerCase().replace(/\s+/g, '-').slice(0, 50)
            }
        },{
            title: 'Fact',
            name: 'fact',
            type: 'text',
            description: 'dette er fakta om skuespilleren'
        },
    ],
}