"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl",
    "text-sm font-medium",
    "transition-all duration-200",
    "outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&>svg]:size-4 [&>svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-transparent",
          "hover:bg-surface-secondary",
          "data-[state=on]:bg-surface-tertiary",
          "data-[state=on]:text-content-primary",
        ],
        outline: [
          "border-2 border-border-default",
          "bg-transparent",
          "hover:bg-surface-secondary",
          "data-[state=on]:bg-brand",
          "data-[state=on]:text-brand-on-emphasis",
          "data-[state=on]:border-brand",
        ],
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-8 px-2.5 min-w-8",
        lg: "h-12 px-4 min-w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }