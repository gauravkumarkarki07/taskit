import { ApiManager } from "@/Common/Services/TaskItApi/ApiManager";
import { TaskEndpoints } from "@/Common/Services/TaskItApi/Endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TaskCreate } from "../views/Index";
import { toast } from "sonner";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      projectId,
      data,
    }: {
      projectId: string;
      data: TaskCreate;
    }) => {
      const response = await ApiManager.post(
        TaskEndpoints.createTask(projectId),
        data
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskById"] });
      toast.success("Task created successfully");
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      projectId,
      taskId,
      data,
    }: {
      projectId: string;
      taskId: string;
      data: TaskCreate;
    }) => {
      const response = await ApiManager.put(
        TaskEndpoints.updateTask(projectId, taskId),
        data
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskById"] });
      toast.success("Task updated successfully");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      projectId,
      taskId,
    }: {
      projectId: string;
      taskId: string;
    }) => {
      const response = await ApiManager.delete(
        TaskEndpoints.deleteTask(projectId, taskId)
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTasks"] });
      queryClient.invalidateQueries({ queryKey: ["getTaskById"] });
      toast.success("Task deleted successfully");
    },
  });
};

export const useGetAllTasks = (projectId: string) => {
  return useQuery({
    queryKey: ["getAllTasks", projectId],
    queryFn: async () => {
      const response = await ApiManager.get(
        TaskEndpoints.getAllTasks(projectId)
      );
      return response;
    },
  });
};

export const useGetTaskById = (projectId: string, taskId: string) => {
  return useQuery({
    queryKey: ["getTaskById"],
    queryFn: async () => {
      const response = await ApiManager.get(
        TaskEndpoints.getTaskById(projectId, taskId)
      );
      return response;
    },
  });
};
