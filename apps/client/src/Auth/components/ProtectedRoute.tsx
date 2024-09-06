import Sidebar from "@/Common/pages/Sidebar"
import { Navigate, Outlet } from "react-router-dom"
import { useVerifyToken } from "../hooks/useAuthQuery"
import Spinner from '@/Common/Utils/Spinner'

function ProtectedRoute() {
    const { data: validUserDetails, isLoading } = useVerifyToken();

    if (isLoading) {
        return (
            <Spinner/>
        )
    }

    return (
        <section className="flex">
            <section className="w-[23%] min-h-screen">
                <Sidebar />
            </section>
            <section className="w-full px-4 py-4 bg-tertiary/5 min-h-screen">
                {validUserDetails ? <Outlet /> : <Navigate to={'/auth/login'} replace />}
            </section>
        </section>
    )
}

export default ProtectedRoute