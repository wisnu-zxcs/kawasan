"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Tooltip Component
 * 
 * Design Principles:
 * - Minimal, non-intrusive
 * - Quick appearance (0ms delay)
 * - Inverted color scheme
 * - Arrow pointer for context
 * - Smooth fade animation
 */

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          /* Base Styles */
          [
            "z-50 max-w-xs",
            "overflow-hidden",
            "rounded-lg",
            "px-3 py-1.5",
            "text-xs font-medium",
            "bg-content-primary text-content-inverse",
            "shadow-lg",
          ],

          /* Animation */
          [
            "animate-in fade-in-0 zoom-in-95",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
          ],

          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
}

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent