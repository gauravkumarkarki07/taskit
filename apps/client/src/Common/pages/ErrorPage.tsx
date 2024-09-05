import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigate=useNavigate();
    
    const navigateToHome=()=>{
        navigate('/',{replace:true})
    }
  return (
    <section className="flex flex-col items-center gap-3 justify-center min-h-screen">
        <article className="flex flex-col text-3xl">
            <span className="text-accentPrimary">Ops!</span>
            <h1>Something went wrong!</h1>
        </article>
        <Button type="button" onClick={navigateToHome}>
            Go back Home
        </Button>
    </section>
  )
}

export default ErrorPage