import { useEffect, useState } from 'react'
import { getMovie } from '../lib/services/movieService'

export default function MovieList() {
  const [movie, setMovie] = useState([])

  const getMovieData = async () => {
    const movies = await getMovie([])
    setMovie(movies)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <div>
      <section className="mt-5 grid grid-cols-4 gap-5">
        {movie?.map((film) => (
          <article className="bg-[#2F2F2F] px-6 py-4 shadow-md shadow-[#0a141a] rounded-md flex flex-col">
            <h1 className="text-xl font-extrabold text-[#F6F6F6] mb-5">
              {film.title}
            </h1>
              <img
                src={film.poster?.asset.url}
                alt="img"
                className="h-90 w-50 rounded"
              />
          </article>
        ))}
      </section>
    </div>
  )
}
