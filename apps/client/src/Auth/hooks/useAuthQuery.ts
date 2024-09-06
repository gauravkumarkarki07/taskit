import { ApiManager } from "@/Common/Services/TaskItApi/ApiManager";
import { AuthEndpoints } from "@/Common/Services/TaskItApi/Endpoints";
import { useMutation } from "@tanstack/react-query";
import { SignUp } from "../components/SignupForm";
import { toast } from "sonner";

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (data:SignUp) => {
      const response = await ApiManager.post(AuthEndpoints.signUp(), data);
      return response;
    },
    onError:(error)=>{
        toast.error(error.message)
    }
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await ApiManager.post(AuthEndpoints.login(), data);
      return response;
    },
    onError:(error)=>{
        toast.error(error.message)
    }
  });
};
