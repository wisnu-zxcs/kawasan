"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "px-2.5 py-0.5",
    "rounded-full",
    "text-xs font-medium",
    "border-2",
    "whitespace-nowrap",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-surface-secondary",
          "border-border-default",
          "text-content-primary",
        ],
        primary: [
          "bg-brand",
          "border-brand",
          "text-brand-on-emphasis",
        ],
        success: [
          "bg-success/10",
          "border-success/30",
          "text-success",
        ],
        warning: [
          "bg-warning/10",
          "border-warning/30",
          "text-warning",
        ],
        danger: [
          "bg-danger/10",
          "border-danger/30",
          "text-danger",
        ],
        outline: [
          "bg-transparent",
          "border-border-default",
          "text-content-primary",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(
        badgeVariants({ variant }),
        "[&>svg]:size-3 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

export {
  Badge,
  badgeVariants,
  type BadgeProps,
}