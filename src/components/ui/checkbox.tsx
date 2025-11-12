"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        [
          "peer shrink-0",
          "size-5",
          "rounded-lg",
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
          "data-[state=checked]:bg-brand",
          "data-[state=checked]:border-brand",
          "data-[state=checked]:text-brand-on-emphasis",
        ],
        [
          "disabled:cursor-not-allowed",
          "disabled:opacity-40",
        ],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "flex items-center justify-center text-current",
          "transition-transform duration-200",
          "data-[state=checked]:scale-100",
          "data-[state=unchecked]:scale-0"
        )}
      >
        <CheckIcon className="size-3.5 stroke-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }