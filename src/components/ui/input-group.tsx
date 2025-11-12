"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/services/helper/cn"

function InputGroup({
  className,
  ...props
}: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="input-group"
      className={cn(
        [
          "group/input-group relative flex w-full items-center",
          "rounded-xl",
          "border-2 border-border-default",
          "bg-surface",
          "transition-all duration-200",
          "outline-none",
        ],
        "h-11 min-w-0",
        "has-[>textarea]:h-auto",
        [
          "has-[[data-slot=input-group-control]:focus-visible]:border-brand",
          "has-[[data-slot=input-group-control]:focus-visible]:ring-4",
          "has-[[data-slot=input-group-control]:focus-visible]:ring-brand/20",
        ],
        [
          "has-[[data-slot][aria-invalid=true]]:border-danger",
          "has-[[data-slot][aria-invalid=true]]:ring-4",
          "has-[[data-slot][aria-invalid=true]]:ring-danger/20",
        ],
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 text-sm font-medium text-content-tertiary select-none [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-4 pr-2",
        "inline-end": "order-last pr-4 pl-2",
        "block-start": "order-first w-full justify-start px-4 pt-3 pb-2",
        "block-end": "order-last w-full justify-start px-4 pb-3 pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-1.5 items-center",
  {
    variants: {
      size: {
        xs: [
          "h-6 px-2 rounded-lg",
          "[&>svg]:size-3.5",
          "has-[>svg]:px-1.5",
        ],
        sm: [
          "h-7 px-2.5 rounded-lg",
          "[&>svg]:size-4",
          "has-[>svg]:px-2",
        ],
        "icon-xs": "size-6 p-0 rounded-lg",
        "icon-sm": "size-7 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn(
        "flex items-center gap-2",
        "text-sm text-content-tertiary",
        "[&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 h-auto",
        "rounded-none border-0 shadow-none",
        "bg-transparent",
        "focus-visible:ring-0",
        "px-2",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 min-h-20",
        "rounded-none border-0 shadow-none",
        "bg-transparent",
        "focus-visible:ring-0",
        "px-2 py-3",
        "resize-none",
        className
      )}
      {...props}
    />
  )
}

export { InputGroup }

InputGroup.AddOn = InputGroupAddon
InputGroup.Button = InputGroupButton
InputGroup.Text = InputGroupText
InputGroup.Input = InputGroupInput
InputGroup.Textarea = InputGroupTextarea