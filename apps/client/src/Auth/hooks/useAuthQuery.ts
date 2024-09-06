import { ApiManager } from "@/Common/Services/TaskItApi/ApiManager";
import { AuthEndpoints } from "@/Common/Services/TaskItApi/Endpoints";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await ApiManager.post(AuthEndpoints.signUp(), data);
      return response;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await ApiManager.post(AuthEndpoints.login(), data);
      return response;
    },
  });
};
