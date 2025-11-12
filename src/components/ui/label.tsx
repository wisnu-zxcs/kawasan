"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const labelVariants = cva(
  [
    "text-sm font-medium leading-none",
    "text-content-primary",
    "select-none",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-40",
  ],
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
  VariantProps<typeof labelVariants> {
  required?: boolean
  optional?: boolean
}

function Label({
  className,
  size,
  required = false,
  optional = false,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      data-size={size}
      className={cn(labelVariants({ size }), className)}
      {...props}
    >
      {children}
      {required && (
        <>
          <span className="text-danger ml-1" aria-hidden="true">
            *
          </span>
          <span className="sr-only">required</span>
        </>
      )}
      {optional && (
        <span className="text-content-tertiary ml-1 font-normal">
          (optional)
        </span>
      )}
    </LabelPrimitive.Root>
  )
}

export {
  Label,
  labelVariants,
  type LabelProps,
}