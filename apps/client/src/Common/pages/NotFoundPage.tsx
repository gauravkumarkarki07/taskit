import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const url=window.location.origin + window.location.pathname;
    const navigate=useNavigate();
    const navigateToHome=()=>{
        navigate('/',{replace:true})
    }
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <article className="flex flex-col gap-2">
            <span className="text-3xl text-accentPrimary">Ops!</span>
            <h1 className="text-3xl">404, Page Not Found</h1>
            <p className="text-gray-500">
                The requested <code className="text-black">{url}</code> was not found on this server. Thank you !
            </p>
        </article>
        <Button type="button" onClick={navigateToHome}>
            Go Back Home
        </Button>
    </section>
  )
}

export default NotFoundPage