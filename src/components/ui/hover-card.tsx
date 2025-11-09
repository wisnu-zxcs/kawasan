"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Hover Card Component
 * 
 * Design Principles:
 * - Contextual information on hover
 * - Smooth fade animation
 * - Non-intrusive positioning
 * - Clear visual hierarchy
 */

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      {...props}
    />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          /* Base Styles */
          [
            "z-50 w-80",
            "rounded-xl",
            "border-2 border-border-default",
            "bg-surface",
            "p-4",
            "shadow-xl",
            "outline-none",
          ],

          /* Animation */
          [
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
          ],

          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
}

HoverCard.Trigger = HoverCardTrigger
HoverCard.Content = HoverCardContent