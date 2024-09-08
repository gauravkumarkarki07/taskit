import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import TaskCreateDialog from "@/Tasks/components/TaskCreateDialog"
import { taskTableHeader } from '../constants/tastTableConstant';
import { useGetAllTasks } from "@/Tasks/hooks/useTaskQuery";
import { useParams } from "react-router-dom";
import Spinner from "@/Common/Utils/Spinner";
import { format } from "date-fns";
import { getStatusColor } from "@/Common/Utils/GetStatusColor";
import TaskTableActionButton from "./TaskTableActionButton";

interface TaskReponse{
    id:string;
    title:string;
    description?:string;
    status:string;
    dueDate?:string;
}

function TaskTable() {
    const { projectId:paramsId } = useParams();
    const projectId = paramsId || '';
    const { data: taskFromApi, isLoading } = useGetAllTasks(projectId);

    if(isLoading){
        return <Spinner/>
    }

    return (
        <section className="flex flex-col bg-white px-4 py-4 rounded-lg gap-2">
            <section className="flex flex-col gap-2">
                <section className="flex justify-between items-center">
                    <article className="flex flex-col">
                        <h1 className="font-semibold">Task Details</h1>
                        <span className="text-xs text-gray-500">
                            Track your tasks and deadlines here.
                        </span>
                    </article>
                    <TaskCreateDialog />
                </section>
                <Separator />
                <section>
                    Filters
                </section>
            </section>
            <Table>
                <TableHeader>
                    <TableRow>
                        {taskTableHeader.map((head,index) => (
                            <TableHead className="font-semibold" key={index}>{head}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {taskFromApi?.tasks.map((task:TaskReponse,index:number)=>(
                        <TableRow key={task?.id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell className="max-w-[300px] truncate">{task?.title}</TableCell>
                            <TableCell className="max-w-[200px] truncate text-gray-500 text-xs">{task?.description}</TableCell>
                            <TableCell className={getStatusColor(task.status || '')}>{task?.status}</TableCell>
                            <TableCell className='text-xs'>
                                {task?.dueDate ? format(task.dueDate,"PPP"):"No due date"}
                            </TableCell>
                            <TableCell>
                                <TaskTableActionButton/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}

export default TaskTable
