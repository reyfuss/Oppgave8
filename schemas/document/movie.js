export default {
    type: 'document',
    name: 'movie',
    title: 'Film',
    fields: [
      {
        type: 'string',
        name: 'title',
        title: 'Tittel',
        description: 'Dette er navnet på filmen',
      },
      {
        title: 'Actors',
        name: 'actors',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'actor'}
            ]
          }
        ]
      },
      {
        type: 'image',
        title: 'Poster',
        name: 'poster'
      },
    ],
  }