"use client"

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Scroll Area Component
 * 
 * Design Principles:
 * - Custom scrollbar styling
 * - Smooth scrolling behavior
 * - Minimal visual footprint
 * - Touch-friendly on mobile
 */

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "size-full rounded-[inherit]",
          "outline-none",
          "focus-visible:ring-2 focus-visible:ring-brand/30",
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        /* Base Styles */
        "flex touch-none select-none p-0.5",
        "transition-colors",

        /* Orientation Specific */
        orientation === "vertical" && "h-full w-2.5",
        orientation === "horizontal" && "h-2.5 flex-col",

        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn(
          "relative flex-1",
          "rounded-full",
          "bg-border-default",
          "hover:bg-border-emphasis",
          "transition-colors",
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }