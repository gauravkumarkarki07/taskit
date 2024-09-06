import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button";
import {useSignUp} from '@/Auth/hooks/useAuthQuery';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface SignUp {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const navigate=useNavigate();
  const{mutateAsync:signUpApiCall,isSuccess}=useSignUp();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUp>();

  const handleSignup = async(validData: SignUp) => {
    await signUpApiCall(validData);
  }

  useEffect(()=>{
    if(isSuccess){
      navigate('/auth/login')
    }
  },[isSuccess,navigate])

  return (
    <section className="flex flex-col px-4 py-4 w-full gap-6 relative">
      <article className="flex gap-2 flex-col items-center">
        <h1 className="text-xl font-semibold">Register Today !</h1>
        <section className="flex text-xs gap-1 text-gray-500">
          <span>Already have an account?</span>
          <Link to={'/auth/login'}>
            <span className="text-accentSecondary underline hover:text-secondary cursor-pointer">Login</span>
          </Link>
        </section>
      </article>
      {/* Login Form */}
      <form className="flex flex-col md:gap-6" onSubmit={handleSubmit(handleSignup)}>
        <section className="relative">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="example@example.com"
            {...register('email', { required: 'Email is required' })}
            className={cn(errors.email && "border-red-500 focus-visible:ring-0")}
          />
          {errors.email && <span className="md:absolute text-xs text-red-500">{errors.email.message}</span>}
        </section>
        <section className="relative mb-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Create a strong password"
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
        <Button type="submit">
          Sign Up
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

export default SignupForm