import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import TaskStatusDropwdown from "../components/TaskStatusDropwdown"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import DatePicker from "@/components/ui/date-picker"

function Index() {
    return (
        <form className="flex flex-col gap-6">
            <section className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input />
            </section>
            <section className="flex flex-col gap-2">
                <Label>Description</Label>
                <Textarea className="resize-none"/>
            </section>
            <section className="flex justify-between items-center">
                <section className="flex flex-col gap-2">
                    <Label>Status</Label>
                    <TaskStatusDropwdown />
                </section>
                <section className="flex flex-col gap-2">
                    <Label>Due Date</Label>
                    <DatePicker />
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