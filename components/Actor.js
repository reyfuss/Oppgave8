import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getActorInfo, getMovieByActor, getMovie } from '../lib/services/movieService'
import Container from './Container'

export default function Actor({ actor, setActorInfo }) {
  const { slug } = useParams()

  const actors = actor.find((person) => person.slug === slug)

  useEffect(() => {
    const getActorData = async () => {
      const info = await getActorInfo(slug)
      setActorInfo(info)
    }
    getActorData()
  }, [slug])


  const [movie, setMovie] = useState([])

  useEffect(() => {
    const getActorMovies = async () => {
      const data = await getMovieByActor(actor);
      setMovie(data);
    };
    getActorMovies();
  }, [actor]);

  console.log(movie)

  return (
    <Container>
      <article className="m-5 rounded-xl bg-[#2F2F2F]">
        <h1 className="m-5 p-5 text-5xl text-[#FDF9F0]">{actors.Name}</h1>
        <p className="m-5 mb-4 p-5 text-xs text-xl text-[#FDF9F0]">
          {actors.fact}
        </p>
        <h2 className="m-5 p-5 text-2xl text-[#FDF9F0]">Movies starring {actors.Name}</h2>
        <p>
        {movie?.map((film) => (
          <article className="bg-[#2F2F2F] px-6 py-4 shadow-md shadow-[#0a141a] rounded-md flex flex-col">
            <h1 className="text-xl font-extrabold text-[#F6F6F6] mb-5">
              {film.title}
            </h1>
          </article>
        ))}
        </p>
      </article>
    </Container>
  )
}
