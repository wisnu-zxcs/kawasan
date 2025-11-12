"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        [
          "peer inline-flex shrink-0",
          "h-6 w-11",
          "rounded-full",
          "border-2 border-transparent",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],
        [
          "bg-border-default",
          "data-[state=unchecked]:bg-border-default",
        ],
        [
          "data-[state=checked]:bg-brand",
        ],
        [
          "focus-visible:ring-4",
          "focus-visible:ring-brand/20",
        ],
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
          [
            "pointer-events-none block",
            "size-5",
            "rounded-full",
            "bg-canvas",
            "shadow-md",
            "transition-transform duration-200 ease-out",
          ],
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