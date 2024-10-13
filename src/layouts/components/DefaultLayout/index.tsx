import { Outlet } from "react-router-dom"
import { Footer } from "../Footer"
import { Header } from "../Header"

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
