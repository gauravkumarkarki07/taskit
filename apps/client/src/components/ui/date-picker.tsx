import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { useState } from "react"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./calendar";

function DatePicker() {
    const[date,setDate]=useState<Date>();
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant={'outline'}
                className={cn(
                    "w-[250px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                )}
            >
                <CalendarIcon className="w-4 mr-2 h-4"/>
                {date ? format(date,"PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
            />
        </PopoverContent>
    </Popover>
  )
}

export default DatePicker