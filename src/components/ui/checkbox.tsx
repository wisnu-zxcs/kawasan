"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Checkbox Component
 * 
 * Design Principles:
 * - Smooth check animation
 * - Clear checked state with brand color
 * - Comfortable touch target
 * - Refined focus ring
 */

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        /* Base Styles */
        [
          "peer shrink-0",
          "size-5",
          "rounded-lg",
          "border-2 border-border-default",
          "bg-surface",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],

        /* Hover State */
        "hover:border-border-emphasis",
        "hover:bg-surface-secondary",

        /* Focus State */
        [
          "focus-visible:ring-4",
          "focus-visible:ring-brand/20",
          "focus-visible:border-brand",
        ],

        /* Checked State */
        [
          "data-[state=checked]:bg-brand",
          "data-[state=checked]:border-brand",
          "data-[state=checked]:text-brand-on-emphasis",
        ],

        /* Disabled State */
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