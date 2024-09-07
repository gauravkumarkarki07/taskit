import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {Ellipsis} from 'lucide-react';

interface ProjectCardActionProps{
    onEdit:()=>void;
    onDelete:()=>void;
}

function ProjectCardAction({onEdit,onDelete}:ProjectCardActionProps) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Ellipsis className="hover:text-accentPrimary transition-colors duration-100 text-gray-500"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onSelect={onEdit}>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={onDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProjectCardAction