"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Collapsible Component
 * 
 * Design Principles:
 * - Simple show/hide toggle
 * - Smooth animation
 * - Flexible trigger positioning
 * - Clean content reveal
 */

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
        /* Base Styles */
        [
          "inline-flex items-center gap-2",
          "text-sm font-medium",
          "transition-colors",
          "outline-none",
        ],

        /* Hover State */
        "hover:text-brand",

        /* Focus State */
        [
          "focus-visible:ring-2",
          "focus-visible:ring-brand/30",
          "focus-visible:rounded-lg",
        ],

        /* Icon */
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
        /* Animation */
        "overflow-hidden",
        "data-[state=closed]:animate-collapsible-up",
        "data-[state=open]:animate-collapsible-down",
        className
      )}
      {...props}
    />
  )
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
}

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent