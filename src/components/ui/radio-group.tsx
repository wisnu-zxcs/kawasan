"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        [
          "peer shrink-0",
          "size-5",
          "rounded-full",
          "border-2 border-border-default",
          "bg-surface",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],
        "hover:border-border-emphasis",
        "hover:bg-surface-secondary",
        [
          "focus-visible:ring-4",
          "focus-visible:ring-brand/20",
          "focus-visible:border-brand",
        ],
        [
          "data-[state=checked]:border-brand",
          "data-[state=checked]:bg-brand",
        ],
        [
          "disabled:cursor-not-allowed",
          "disabled:opacity-40",
        ],
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <CircleIcon className="size-2.5 fill-brand-on-emphasis text-brand-on-emphasis" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup }

RadioGroup.Item = RadioGroupItem