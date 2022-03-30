import { useEffect  } from 'react'
import { Link } from 'react-router-dom'
import  {getActor } from '../lib/services/movieService'
import Container from './Container'
import Title from './Title'

export default function ActorList({ actor, setActor }) {

  const getActorData = async () => {
    const actors = await getActor([])
    setActor(actors)
  }

  useEffect(() => {
    getActorData()
  }, [])

  return (
    <Container>
      <Title title="Actors" />
      <section className="mt-5 grid grid-cols-4 gap-5">
        {actor?.map((skuespiller) => (
          <article
            key={skuespiller.Name}
            className="rounded bg-[#2F2F2F] px-6 py-4 shadow-md shadow-[#0a141a]"
          >
            <h1 className="font-lg mb-2 font-extrabold text-[#FDF9F0]">
              {skuespiller.Name}
            </h1>
            <Link to={skuespiller.slug} className="text-[#] text-xl underline text-[#FFCB74]">
              Click here to read about {skuespiller.Name}!
            </Link>
          </article>
        ))}
      </section>
    </Container>
  )
}
