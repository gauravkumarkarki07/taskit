import { ApiManager } from "@/Common/Services/TaskItApi/ApiManager";
import { ProjectEndpoints } from "@/Common/Services/TaskItApi/Endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Project } from "../components/CreateProjectDialog";
import { toast } from "sonner";

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ["allProjects"],
    queryFn: async () => {
      const response = await ApiManager.get(ProjectEndpoints.getAllProjects());
      return response;
    },
  });
};

export const useGetProjectById = (projectId: string) => {
  return useQuery({
    queryKey: ["projectById", projectId],
    queryFn: async () => {
      const response = await ApiManager.get(
        ProjectEndpoints.getProjectById(projectId)
      );
      return response;
    },
  });
};

export const useCreateProject = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: async (data: Project) => {
      const response = await ApiManager.post(
        ProjectEndpoints.createProject(),
        data
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["projectById"] });
      query.invalidateQueries({ queryKey: ["allProjects"] });
      toast.success("Project Created Successfully");
    },
  });
};

export const useUpdateProject = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: async ({
      projectId,
      updatedData,
    }: {
      projectId: string;
      updatedData: Project;
    }) => {
      const response = await ApiManager.put(
        ProjectEndpoints.updateProject(projectId),
        updatedData
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["projectById"] });
      query.invalidateQueries({ queryKey: ["allProjects"] });
      toast.success("Project Updated Successfully");
    },
  });
};

export const useDeleteProject = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: async (projectId: string) => {
      const response = await ApiManager.delete(
        ProjectEndpoints.deleteProject(projectId)
      );
      return response;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["projectById"] });
      query.invalidateQueries({ queryKey: ["allProjects"] });
      toast.success("Project Deleted Successfully");
    },
  });
};
