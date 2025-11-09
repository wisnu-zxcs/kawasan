"use client"

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import * as React from "react"
import { type DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Calendar Component
 * 
 * Design Principles:
 * - Clean date picker interface
 * - Clear selected states
 * - Smooth navigation
 * - Brand color highlights
 * - Range selection support
 */

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar p-4",
        "[--cell-size:2.5rem]",
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),

        months: cn(
          "flex gap-6 flex-col md:flex-row relative",
          defaultClassNames.months
        ),

        month: cn(
          "flex flex-col w-full gap-4",
          defaultClassNames.month
        ),

        nav: cn(
          "flex items-center gap-2 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),

        button_previous: cn(
          buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
          "size-8 aria-disabled:opacity-40 p-0 select-none",
          defaultClassNames.button_previous
        ),

        button_next: cn(
          buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
          "size-8 aria-disabled:opacity-40 p-0 select-none",
          defaultClassNames.button_next
        ),

        month_caption: cn(
          "flex items-center justify-center h-8 w-full px-8",
          defaultClassNames.month_caption
        ),

        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-8 gap-2",
          defaultClassNames.dropdowns
        ),

        dropdown_root: cn(
          "relative has-focus:ring-2 has-focus:ring-brand/30 rounded-lg",
          defaultClassNames.dropdown_root
        ),

        dropdown: cn(
          "absolute inset-0 opacity-0",
          defaultClassNames.dropdown
        ),

        caption_label: cn(
          "select-none font-semibold text-sm tracking-tight text-content-primary",
          captionLayout === "dropdown" && "rounded-lg pl-2 pr-1 flex items-center gap-1 h-7",
          defaultClassNames.caption_label
        ),

        table: "w-full border-collapse mt-4",

        weekdays: cn("flex", defaultClassNames.weekdays),

        weekday: cn(
          "text-content-tertiary flex-1 font-medium text-xs uppercase tracking-wide select-none",
          defaultClassNames.weekday
        ),

        week: cn("flex w-full mt-1", defaultClassNames.week),

        day: cn(
          "relative w-full h-full p-0 text-center group/day aspect-square select-none",
          defaultClassNames.day
        ),

        range_start: cn(
          "rounded-l-xl bg-brand",
          defaultClassNames.range_start
        ),

        range_middle: cn(
          "rounded-none bg-brand-subtle",
          defaultClassNames.range_middle
        ),

        range_end: cn(
          "rounded-r-xl bg-brand",
          defaultClassNames.range_end
        ),

        today: cn(
          "bg-surface-secondary rounded-xl",
          defaultClassNames.today
        ),

        outside: cn(
          "text-content-tertiary opacity-50",
          "aria-selected:text-content-tertiary",
          defaultClassNames.outside
        ),

        disabled: cn(
          "text-content-tertiary opacity-30",
          defaultClassNames.disabled
        ),

        hidden: cn("invisible", defaultClassNames.hidden),

        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },

        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon
              className={cn("size-4", className)}
              {...props}
            />
          )
        },

        DayButton: CalendarDayButton,

        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center text-xs text-content-tertiary">
                {children}
              </div>
            </td>
          )
        },

        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon-sm"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        /* Base Styles */
        [
          "flex size-[--cell-size] items-center justify-center",
          "aspect-square w-full",
          "font-normal text-sm",
          "rounded-xl",
        ],

        /* Selected Single */
        [
          "data-[selected-single=true]:bg-brand",
          "data-[selected-single=true]:text-brand-on-emphasis",
          "data-[selected-single=true]:hover:bg-brand-emphasis",
        ],

        /* Range States */
        [
          "data-[range-middle=true]:bg-brand-subtle",
          "data-[range-middle=true]:text-content-primary",
          "data-[range-middle=true]:rounded-none",

          "data-[range-start=true]:bg-brand",
          "data-[range-start=true]:text-brand-on-emphasis",
          "data-[range-start=true]:rounded-xl",
          "data-[range-start=true]:rounded-r-none",

          "data-[range-end=true]:bg-brand",
          "data-[range-end=true]:text-brand-on-emphasis",
          "data-[range-end=true]:rounded-xl",
          "data-[range-end=true]:rounded-l-none",
        ],

        /* Focus State */
        [
          "group-data-[focused=true]/day:relative",
          "group-data-[focused=true]/day:z-10",
          "group-data-[focused=true]/day:ring-2",
          "group-data-[focused=true]/day:ring-brand/30",
        ],

        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }