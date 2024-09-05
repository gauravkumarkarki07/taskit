import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface ForgetPassword {
    email: string;
}

function ForgetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPassword>();

    const handleSendLink = (validData: ForgetPassword) => {
        console.log(validData);
    }

    return (
        <section className="flex flex-col px-4 py-4 w-full gap-6 relative">
            <article className="flex gap-2 flex-col items-center">
                <h1 className="text-xl font-semibold">Ops! Did you forget your password ?</h1>
                <section className="flex text-xs gap-1 text-gray-500">
                    <span>Don't have an account?</span>
                    <Link to={'/auth/signup'}>
                        <span className="text-accentSecondary underline hover:text-secondary cursor-pointer">Create a free account</span>
                    </Link>
                </section>
            </article>
            {/* Login Form */}
            <form className="flex flex-col md:gap-6" onSubmit={handleSubmit(handleSendLink)}>
                <section className="relative">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', { required: 'Username Or Email is required' })}
                        className={cn(errors.email && "border-red-500 focus-visible:ring-0")}
                    />
                    {errors.email && <span className="md:absolute text-xs text-red-500">{errors.email.message}</span>}
                </section>
                <Button>
                    Send Link
                </Button>
            </form>
            <Link to={'/auth/login'}>
                <span className="text-xs text-gray-500 hover:underline cursor-pointer w-fit">
                    Login?
                </span>
            </Link>
        </section>
    )
}

export default ForgetPassword