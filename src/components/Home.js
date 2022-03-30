import Container from './Container'
import MoviesList from './MovieList'
import Title from './Title'

export default function Home() {
  return (
    <Container>
      <Title title="Movies" />
      <MoviesList />
    </Container>
  )
}
