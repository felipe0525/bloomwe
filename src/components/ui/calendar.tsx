
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fixedWeeks // Mantiene siempre 6 filas para un tamaño constante
      className={cn("p-4 pb-20 relative", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-6 w-full",
        caption: "flex justify-center items-center h-10 mb-6 px-10",
        caption_label: "text-lg font-black text-primary uppercase tracking-tight",
        nav: "flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-12 w-12 bg-secondary/40 p-0 opacity-100 border-none rounded-2xl transition-all hover:bg-primary hover:text-white shadow-none absolute left-4 bottom-4 z-10 top-auto"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-12 w-12 bg-secondary/40 p-0 opacity-100 border-none rounded-2xl transition-all hover:bg-primary hover:text-white shadow-none absolute right-4 bottom-4 z-10 top-auto"
        ),
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between mb-4",
        head_cell:
          "text-muted-foreground/30 rounded-md w-10 font-bold text-[0.65rem] uppercase tracking-[0.2em] text-center",
        row: "flex w-full mt-2 justify-between",
        cell: "h-11 w-11 text-center text-sm p-0 relative focus-within:relative focus-within:z-20 flex items-center justify-center",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 w-11 p-0 font-bold rounded-2xl transition-all flex items-center justify-center hover:bg-primary/10 hover:text-primary"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground shadow-xl shadow-primary/30 scale-105",
        day_today: "bg-secondary text-primary font-black",
        day_outside:
          "day-outside text-muted-foreground/10 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-6 w-6", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-6 w-6", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
