import client from '../client'

const movieFields = `
    title,
    'poster': poster{asset->{url}},
    actors,
    'actor': actor->{slugName, "slugName": slugnName.current},
    movies,
    _id
`

const actorFields = `
  fact,
  slugName,
  'slug' : slugName.current,
  Name,
  _id,
`

const actorMovieFields = `
  _id,
  title,
  'poster': poster{asset->{url}},
  'actor': actor->{slugName, "Name": slugnName.current}
`

export async function getMovieByActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->slugName.current==$actor]{${actorMovieFields}}`,
    { actor }
  )
  return data
}

export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie" ]{${movieFields}}`)
  return data
}

export const getActor = async () => {
  const data = await client.fetch(`*[_type == "actor" ]{${actorFields}}`)
  return data
}

export const getActorInfo = async (slug) => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}
