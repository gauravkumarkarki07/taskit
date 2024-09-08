import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CirclePlusIcon } from "lucide-react"

function TaskTable() {
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
            <Button>
                <section className="flex gap-2 items-center">
                    <CirclePlusIcon/>
                    <span>
                        Add New Task
                    </span>
                </section>
            </Button>
        </section>
        <Separator/>
        <section>
            Filters
        </section>
       </section>
       <Table>
        <TableHeader>
            <TableRow>
                {tableHead.map((head)=>(
                    <TableHead className="font-semibold">{head}</TableHead>
                ))}
            </TableRow>
        </TableHeader>
        <TableBody>
            {tableBody.map((data,index)=>(
                <TableRow key={index}>
                    <TableCell>
                        {index}
                    </TableCell>
                    <TableCell>
                        {data.title}
                    </TableCell>
                    <TableCell>
                        {data.description}
                    </TableCell>
                    <TableCell>
                        {data.status}
                    </TableCell>
                    <TableCell>
                        {data.dueDate}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
       </Table>
    </section>
  )
}

export default TaskTable

const tableBody=[
    {
        title:'Test',
        description:'Test description',
        status:'PENDING',
        dueDate:'12 Aug, 2020'
    }
]

const tableHead=[
    'S.N',
    'Task',
    'Description',
    'Status',
    'Due Date',
    'Action'
]