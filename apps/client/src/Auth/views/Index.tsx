import { Outlet } from "react-router-dom"
import Welcome from "../components/Welcome"

function Index() {
  return (
   <section className="flex items-center justify-center min-h-screen">
     <section className="flex border rounded-lg overflow-clip h-[400px] w-[1000px]">
      <section className="w-[50%]">
        <Welcome/>
      </section>
      <section className="w-[50%]">
        <Outlet />
      </section>
    </section>
   </section>
  )
}

export default Index