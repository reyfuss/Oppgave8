import { NavLink } from 'react-router-dom'

export default function navigation() {
  return (
    <header className="w-full bg-[#2F2F2F] px-2 py-2 text-xl font-bold">
      <nav className="w-full">
        <ul className="flex place-content-center gap-5">
          <li className="m-1 rounded bg-[#FFCB74] p-2 text-2xl text-[#111111]">
            <NavLink to="/">Movies</NavLink>
          </li>
          <li className="m-1 rounded bg-[#FFCB74] p-2 text-2xl text-[#111111]">
            <NavLink to="/actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
