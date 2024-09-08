import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import TaskStatusDropwdown from "../components/TaskStatusDropwdown"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import DatePicker from "@/components/ui/date-picker"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"

export interface TaskCreate {
    title: string;
    description?: string;
    status: string;
    dueDate: Date;
}

function Index() {
    const { register, handleSubmit, formState: { errors }, control } = useForm<TaskCreate>();

    const handleSave = (validData: TaskCreate) => {
        console.log(validData);
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleSave)}>
            <section className="flex flex-col gap-1 h-[50px]">
                <Label>Title</Label>
                <Input
                    {...register('title', { required: 'Title is required' })}
                    className={cn(errors.title && "border-red-500 focus-visible:ring-0")}
                />
                {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
            </section>
            <section className="flex flex-col gap-1">
                <Label>Description</Label>
                <Textarea className="resize-none" {...register('description')} />
            </section>
            <section className="flex justify-between items-center">
                <section className="flex flex-col gap-1">
                    <Label>Status</Label>
                    <TaskStatusDropwdown control={control} />
                </section>
                <section className="flex flex-col gap-1">
                    <Label>Due Date</Label>
                    <DatePicker control={control} />
                </section>
            </section>
            <DialogFooter>
                <section className="flex justify-between items-center w-full">
                    <DialogClose asChild>
                        <Button variant={'outline'}>
                            Close
                        </Button>
                    </DialogClose>
                    <Button>
                        Save
                    </Button>
                </section>
            </DialogFooter>
        </form>
    )
}

export default Index