export const AuthEndpoints = {
  signUp: () => {
    return "auth/signup";
  },
  login: () => {
    return "auth/login";
  },
  verifyToken: () => {
    return "auth/verifytoken";
  },
  logout: () => {
    return "auth/logout";
  },
};

export const ProjectEndpoints = {
  createProject: () => {
    return `project/createproject`;
  },
  updateProject: (projectId: string) => {
    return `project/updateproject/${projectId}`;
  },
  deleteProject: (projectId: string) => {
    return `project/deleteproject/${projectId}`;
  },
  getAllProjects: () => {
    return `project/getallprojects`;
  },
  getProjectById:(projectId:string)=>{
    return `project/getprojectbyid/${projectId}`
  }
};

export const TaskEndpoints={
  createTask:(projectId:string)=>{
    return `${projectId}`
  },
  updateTask:(projectId:string,taskId:string)=>{
    return `${projectId}/${taskId}`
  },
  getTaskById:(projectId:string,taskId:string)=>{
    return `${projectId}/${taskId}`
  },
  getAllTasks:(projectId:string)=>{
    return `${projectId}`
  },
  deleteTask:(projectId:string,taskId:string)=>{
    return `${projectId}/${taskId}`
  }
}
