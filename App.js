/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Actor from './components/Actor'
import ActorList from './components/ActorList'
import Navigation from './routes/Navigasjon'
import DefaultLayout from './layout/DefaultLayout'

export default function App() {
  const [actor, setActor] = useState([])
  const [actorInfo, setActorInfo] = useState([null])

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="actors">
            <Route
              index
              element={<ActorList actor={actor} setActor={setActor} />}
            />
            <Route
              path=":slug"
              element={
                <Actor
                  actor={actor}
                  actorInfo={actorInfo}
                  setActorInfo={setActorInfo}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
