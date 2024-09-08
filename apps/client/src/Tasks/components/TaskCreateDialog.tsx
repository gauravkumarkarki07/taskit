import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CirclePlusIcon } from "lucide-react"
import TaskForm from '../views/Index'
import { useState } from "react"


function TaskCreateDialog() {
    const[isOpen,setIsOpen]=useState(false);

    const closeDialog=()=>{
        setIsOpen(false);
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <section className="flex gap-2 items-center">
                        <CirclePlusIcon />
                        <span>
                            Add New Task
                        </span>
                    </section>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Manage your tasks details
                    </DialogTitle>
                    <DialogDescription>
                        Add title, description and due dates of the tasks
                    </DialogDescription>
                </DialogHeader>
                <TaskForm setIsOpen={closeDialog}/>
            </DialogContent>
        </Dialog>
    )
}

export default TaskCreateDialog