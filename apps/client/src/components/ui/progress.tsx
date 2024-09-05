import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number;
  }
>(({ className, value = 0, ...props }, ref) => (
  <div className="relative w-full">
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full flex-1 bg-accentSecondary/50 transition-all dark:bg-slate-50"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
    <span
      className="absolute inset-1-2 flex items-center justify-center text-xs font-semibold text-accentSecondary"
      style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
    >
      {value}%
    </span>
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
