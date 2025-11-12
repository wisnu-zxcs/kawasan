"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        [
          "flex items-center justify-between gap-2",
          "w-full h-11 px-4 py-2.5",
          "rounded-xl",
          "text-sm font-normal",
          "bg-surface text-content-primary",
          "border-2 border-border-default",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],
        "data-placeholder:text-content-tertiary",
        "hover:border-border-emphasis",
        "hover:bg-surface-secondary",
        [
          "focus:border-brand",
          "focus:ring-4 focus:ring-brand/20",
          "focus:bg-canvas",
        ],
        [
          "disabled:opacity-40",
          "disabled:cursor-not-allowed",
          "disabled:bg-surface-tertiary",
        ],
        "[&>svg]:shrink-0 [&>svg]:size-4 [&>svg]:text-content-tertiary",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          [
            "relative z-50",
            "min-w-32",
            "overflow-hidden",
            "rounded-xl",
            "border-2 border-border-default",
            "bg-surface",
            "shadow-xl",
          ],
          [
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
          ],
          position === "popper" && [
            "data-[side=bottom]:translate-y-1",
            "data-[side=left]:-translate-x-1",
            "data-[side=right]:translate-x-1",
            "data-[side=top]:-translate-y-1",
          ],
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" && "w-full min-w-(--radix-select-trigger-width)"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-3 py-2 text-xs font-semibold",
        "text-content-tertiary",
        "tracking-wide uppercase",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        [
          "relative flex items-center gap-2",
          "w-full px-3 py-2.5 pr-8",
          "rounded-lg",
          "text-sm font-normal",
          "cursor-pointer select-none",
          "outline-none",
          "transition-colors duration-150",
        ],
        [
          "focus:bg-surface-secondary",
          "focus:text-content-primary",
        ],
        "data-disabled:pointer-events-none data-disabled:opacity-40",
        "[&>svg]:shrink-0 [&>svg]:size-4 [&>svg]:text-content-tertiary",
        className
      )}
      {...props}
    >
      <span className="absolute right-3 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4 text-brand" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "my-1 h-px bg-border-subtle",
        className
      )}
      {...props}
    />
  )
}

export { Select }

Select.Group = SelectGroup
Select.Value = SelectValue
Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Label = SelectLabel
Select.Item = SelectItem
Select.Separator = SelectSeparator