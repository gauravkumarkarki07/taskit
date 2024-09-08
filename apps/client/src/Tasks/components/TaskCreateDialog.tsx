import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CirclePlusIcon } from "lucide-react"
import TaskForm from '../views/Index'

function TaskCreateDialog() {
    return (
        <Dialog>
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
                <TaskForm/>
            </DialogContent>
        </Dialog>
    )
}

export default TaskCreateDialog