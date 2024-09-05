import Sidebar from "@/Common/pages/Sidebar"
import { Outlet } from "react-router-dom"

function ProtectedRoute() {
    return (
        <section className="flex">
            <section className="w-[23%] min-h-screen">
                <Sidebar/>
            </section>
            <section className="w-full px-4 py-4 bg-tertiary/5 min-h-screen">
                <Outlet/>
            </section>
        </section>
    )
}

export default ProtectedRoute