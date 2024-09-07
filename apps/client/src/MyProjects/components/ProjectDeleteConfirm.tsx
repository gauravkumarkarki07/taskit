import { Button } from "@/components/ui/button"
import { CircleAlert } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface ProjectDeleteConfirmProps{
    onDelete:()=>void;
}

function ProjectDeleteConfirm({onDelete}:ProjectDeleteConfirmProps) {
    const[isOpen,setIsOpen]=useState(false);
    const navigate=useNavigate();

    const handleDelete=()=>{
        onDelete();
        setIsOpen(false);
        navigate('/myprojects');
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'destructive'}>
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <section className="flex flex-col gap-2 items-center">
                        <span className="text-red-500">
                            <CircleAlert size={100}/>
                        </span>
                        <span>
                        Are you Sure ?
                        </span>
                        </section>
                    </DialogTitle>
                    <DialogDescription>
                        Do you really want to delete these records ? This process cannot be undone.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex w-full">
                    <section className="flex items-center justify-between w-full">
                        <DialogClose asChild>
                            <Button variant={'outline'} type="button">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="button" variant={'destructive'} onClick={handleDelete}>
                            Delete
                        </Button>
                    </section>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDeleteConfirm