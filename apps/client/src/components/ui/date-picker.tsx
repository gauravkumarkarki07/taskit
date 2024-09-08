import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import { Controller,Control } from "react-hook-form";
import { TaskCreate } from "@/Tasks/views/Index";

interface DatePicker{
    control:Control<TaskCreate>
}

function DatePicker({control}:DatePicker) {
  return (
    <Controller
        name="dueDate"
        control={control}
        render={({field:{value,onChange}})=>(
            <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        "w-[250px] justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="w-4 mr-2 h-4"/>
                    {value ? format(value,"PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
        )}
    >
    </Controller>

  )
}

export default DatePicker