import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { cn } from '@/lib/utils'
import { useLogin } from "@/Auth/hooks/useAuthQuery"
import { useEffect } from "react"
import Spinner from "@/Common/Utils/Spinner"

export interface LoginData {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate=useNavigate();
  const { mutateAsync: loginApiCall,isSuccess,isPending } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();

  const handleLogin = async (validData: LoginData) => {
    await loginApiCall(validData);
  }

  useEffect(()=>{
    if(isSuccess){
      navigate('/');
    }
  },[isSuccess,navigate])
  
  return (
    <section className="flex flex-col px-4 py-4 w-full gap-6 relative">
      <article className="flex gap-2 flex-col items-center">
        <h1 className="text-xl font-semibold">Welcome Back!</h1>
        <section className="flex text-xs gap-1 text-gray-500">
          <span>Don't have an account?</span>
          <Link to={'/auth/signup'}>
            <span className="text-accentSecondary underline hover:text-secondary cursor-pointer">Create a free account</span>
          </Link>
        </section>
      </article>
      {/* Login Form */}
      <form className="flex flex-col md:gap-6" onSubmit={handleSubmit(handleLogin)}>
        <section className="relative">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
            className={cn(errors.email && "border-red-500 focus-visible:ring-0")}
          />
          {errors.email && <span className="md:absolute text-xs text-red-500">{errors.email.message}</span>}
        </section>
        <section className="relative mb-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            className={cn(errors.password && "border-red-500 focus-visible:ring-0")}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
          />
          {errors.password && <span className="md:absolute text-xs text-red-500">{errors.password.message}</span>}
        </section>
        <Button>
          {isPending ? <Spinner/> : 'Login'}
        </Button>
      </form>
      <span className="text-xs text-gray-500 hover:underline cursor-pointer w-fit">
        <Link to={'/auth/forgetpassword'}>
          Forget Password?
        </Link>
      </span>
    </section>
  )
}

export default LoginForm