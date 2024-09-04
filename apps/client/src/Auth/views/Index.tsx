import { Outlet } from "react-router-dom"
import Welcome from "../components/Welcome"

function Index() {
  return (
   <section className="flex items-center justify-center min-h-screen px-2">
     <section className="flex flex-col md:flex-row border rounded-lg overflow-clip md:h-[400px] md:w-[1000px] h-[600px]">
      <section className="md:w-[50%] h-[50%] md:h-full">
        <Welcome/>
      </section>
      <section className="md:w-[50%] h-[50%] md:h-full">
        <Outlet />
      </section>
    </section>
   </section>
  )
}

export default Index