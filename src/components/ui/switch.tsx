"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Switch Component
 * 
 * Design Principles:
 * - iOS-style toggle switch
 * - Smooth slide animation
 * - Brand color when active
 * - Comfortable thumb size
 * - Clear on/off states
 */

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        /* Base Styles */
        [
          "peer inline-flex shrink-0",
          "h-6 w-11",
          "rounded-full",
          "border-2 border-transparent",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],

        /* Unchecked State */
        [
          "bg-border-default",
          "data-[state=unchecked]:bg-border-default",
        ],

        /* Checked State */
        [
          "data-[state=checked]:bg-brand",
        ],

        /* Focus State */
        [
          "focus-visible:ring-4",
          "focus-visible:ring-brand/20",
        ],

        /* Disabled State */
        [
          "disabled:cursor-not-allowed",
          "disabled:opacity-40",
        ],

        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          /* Base Styles */
          [
            "pointer-events-none block",
            "size-5",
            "rounded-full",
            "bg-canvas",
            "shadow-md",
            "transition-transform duration-200 ease-out",
          ],

          /* Position */
          [
            "data-[state=unchecked]:translate-x-0",
            "data-[state=checked]:translate-x-5",
          ]
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }