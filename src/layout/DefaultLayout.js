import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <main className="bg-[#F6F6F6]">
      <Outlet />
    </main>
  )
}
