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
