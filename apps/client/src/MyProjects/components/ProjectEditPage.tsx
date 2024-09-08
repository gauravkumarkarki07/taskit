import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Project } from "./CreateProjectDialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDeleteProject, useGetProjectById, useUpdateProject } from "../hooks/useProjectQuery";
import { useParams } from "react-router-dom";
import Spinner from "@/Common/Utils/Spinner";
import { useEffect } from "react";
import ProjectDeleteConfirm from "./ProjectDeleteConfirm";
import TaskTable from "./TaskTable";

function ProjectEditPage() {

    const { projectId } = useParams();

    const id = projectId || ''

    const { data: projectDetails, isLoading } = useGetProjectById(id);

    const { mutateAsync: updateProjectApiCall, isPending: saving } = useUpdateProject();

    const {mutateAsync:deleteProjectApiCall}=useDeleteProject();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Project>();

    const handleSave = async (validData: Project) => {
        await updateProjectApiCall({ projectId: id, updatedData: validData })
    }

    const handleDelete=async()=>{
        await deleteProjectApiCall(id);
    }

    useEffect(() => {
        if (projectDetails) {
            reset(projectDetails)
        }
    }, [projectDetails, reset])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className="flex flex-col gap-6">
            <article className="flex flex-col gap-1 text-gray-500">
                <h1 className="text-lg font-semibold text-black">
                    Project Details
                </h1>
                <span>
                    Manage your project details here
                </span>
                <span className="text-xs">
                    You can add task and its deadline below *
                </span>
            </article>
            <form className="flex flex-col gap-6 bg-white px-4 py-4 rounded-lg" onSubmit={handleSubmit(handleSave)}>
                <section className='flex flex-col gap-2 h-[60px]'>
                    <Label>Project Title</Label>
                    <Input
                        {...register('title', { required: 'Title is required' })}
                        className={cn(errors.title && "border-red-500 focus-visible:ring-0")}
                    />
                    {errors.title && <span className='text-xs text-red-500'>{errors.title.message}</span>}
                </section>
                <section className='flex flex-col gap-2'>
                    <Label>Description</Label>
                    <Textarea {...register('description')} className="h-[100px] resize-none" />
                </section>
                <section className="flex justify-between">
                    <ProjectDeleteConfirm onDelete={handleDelete}/>
                    <Button type="submit" className="w-[120px] flex items-center justify-center">
                        {
                            saving ?
                                <span className="flex items-center justify-center gap-2">
                                    Saving
                                    <Spinner size={15} fullscreen={false}/>
                                </span>
                                :
                                'Save Changes'
                        }
                    </Button>
                </section>
            </form>
            <TaskTable/>
        </section>
    );
}

export default ProjectEditPage;