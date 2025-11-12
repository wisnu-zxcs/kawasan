"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        [
          "inline-flex items-center gap-2",
          "text-sm font-medium",
          "transition-colors",
          "outline-none",
        ],
        "hover:text-brand",
        [
          "focus-visible:ring-2",
          "focus-visible:ring-brand/30",
          "focus-visible:rounded-lg",
        ],
        "[&>svg]:size-4 [&>svg]:shrink-0",
        "[&[data-state=open]>svg]:rotate-180",
        "[&>svg]:transition-transform [&>svg]:duration-200",
        className
      )}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-collapsible-up",
        "data-[state=open]:animate-collapsible-down",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible }

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent