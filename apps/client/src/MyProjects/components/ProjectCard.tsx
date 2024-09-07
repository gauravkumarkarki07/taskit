import { Progress } from "@/components/ui/progress"
import { format } from 'date-fns';
import ProjectCardAction from "./ProjectCardAction";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export interface Project {
    id: string;
    title: string;
    description?: string;
    totalTask?: number;
    taskCompleted?: number;
    createdAt?: Date;
}

type ProjectCardProps = {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const navigate=useNavigate();
    const progressValue = project.totalTask ? (project.taskCompleted || 0) / project.totalTask * 100 : 0;

    const handleEdit=(projectId:string)=>{
        navigate(`/myprojects/${projectId}`)
    }
    
    const handleDelete=()=>{
    
    }
    

    return (
        <section className="px-3 py-2 rounded-md bg-white text-black flex flex-col w-[450px] h-[180px] gap-4 relative">
            <section className="flex flex-col flex-grow gap-2">
                <section className="flex justify-between">
                <h1 className="w-[80%] whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                    {project.title}
                </h1>
                <ProjectCardAction onEdit={()=>handleEdit(project.id)} onDelete={handleDelete}/>
                </section>
                <Separator/>
                <p className="text-gray-500 text-sm h-[30px] break-words overflow-hidden text-ellipsis">
                    {project.description || "No description available"}
                </p>
                {
                    !project.totalTask ? 
                    <span className="text-gray-500 text-sm">No Tasks</span>
                    :
                    <section className="flex flex-col gap-1 text-sm text-gray-500">
                    <span>Tasks Completed</span>
                    <Progress value={progressValue}/>
                </section>

                }
            </section>
            <section className="flex flex-row items-center justify-between text-xs text-gray-500 mt-auto">
                <section className="flex gap-1 px-1 py-1 border rounded-lg bg-primary/20 text-primary">
                    <span>Tasks</span>
                    <span>{project?.totalTask || 0}</span>
                </section>
                <section className="flex gap-1 border rounded-lg px-1 py-1 bg-tertiary/20 text-tertiary">
                    <span>Created At :</span>
                    <span>{project.createdAt ? format(project?.createdAt, 'PPP') : "No date available"}</span>
                </section>
            </section>
        </section>
    )
}

export default ProjectCard
