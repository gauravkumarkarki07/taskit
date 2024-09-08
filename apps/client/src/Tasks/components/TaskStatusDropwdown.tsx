import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

function TaskStatusDropwdown() {
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
            <DropdownMenu>
                <DropdownMenuTrigger className="text-sm w-full">
                    Status
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {status.map((data, index) => (
                        <DropdownMenuItem key={index}>
                            <span className={getStatusColor(data)}>
                                {data}
                            </span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}

export default TaskStatusDropwdown