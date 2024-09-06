import {
    Dialog, DialogClose, DialogContent, DialogDescription,
    DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import { Textarea } from "@/components/ui/textarea";
import { cn } from '@/lib/utils';


interface Project {
    title: string;
    description?: string;
}

function CreateProjectDialog() {
    const { register, handleSubmit, formState: { errors } } = useForm<Project>();

    const handleSave = (validData: Project) => {
        console.log(validData)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex gap-2 items-center w-fit">
                    <span>
                        <CirclePlus />
                    </span>
                    <span>
                        Create New
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        New Project
                    </DialogTitle>
                    <DialogDescription>
                        Create a new project to track its task and deadlines
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-8" onSubmit={handleSubmit(handleSave)}>
                    <section className="flex flex-col gap-1 relative">
                        <Label>Title</Label>
                        <Input
                            {...register('title', { required: 'Title is required' })}
                            className={cn(errors.title && "border-red-500 focus-visible:ring-0")}
                        />
                        {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
                    </section>
                    <section className="flex flex-col gap-1">
                        <Label>Description <span className="text-xs text-gray-500">(optional)</span></Label>
                        <Textarea
                            {...register('description')}
                            className="h-[20px] resize-none text-gray-500"
                        />
                    </section>
                    <DialogFooter>
                        <section className="flex items-center justify-between w-full">
                            <DialogClose>
                                <Button variant={'destructive'} type="button">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit">
                                Save
                            </Button>
                        </section>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateProjectDialog