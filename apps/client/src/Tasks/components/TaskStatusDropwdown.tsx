import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Controller, Control } from "react-hook-form"
import { TaskCreate } from "../views/Index"
import { cn } from "@/lib/utils"

interface TaskStatusDropwdown {
    control: Control<TaskCreate>
}

function TaskStatusDropwdown({ control }: TaskStatusDropwdown) {
    const status = ["PENDING", "COMPLETED", "OVERDUE"]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "PENDING":
                return 'text-yellow-500'
            case "COMPLETED":
                return 'text-green-500'
            case "OVERDUE":
                return 'text-red-500'
            default:
                return 'text-gray-500'
        }
    }
    return (
        <section className="px-2 py-1 border rounded-lg w-[200px]">
            <Controller
                name="status"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <DropdownMenu>
                        <DropdownMenuTrigger             className={cn( value && getStatusColor(value),'text-sm w-full' )}
                        >
                            {value ? value : 'Status'}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {status.map((data, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onSelect={() => onChange(data)}
                                >
                                    <span className={getStatusColor(data)}>
                                        {data}
                                    </span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            >
            </Controller>
        </section>
    )
}

export default TaskStatusDropwdown