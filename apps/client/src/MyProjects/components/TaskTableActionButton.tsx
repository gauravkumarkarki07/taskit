import { Button } from "@/components/ui/button"
import { EditIcon, Trash2 } from 'lucide-react';

function TaskTableActionButton() {
    return (
        <section className="w-full flex items-center gap-3">
            <Button variant={'ghost'} size={'icon'} type="button" className="w-5 h-5 text-primary">
                <EditIcon size={18} />
            </Button>
            <Button variant={'ghost'} size={'icon'} type="button" className="w-5 h-5 text-red-500">
                <Trash2 size={18} />
            </Button>
        </section>
    )
}

export default TaskTableActionButton