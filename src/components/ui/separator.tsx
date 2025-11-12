"use client"

import * as SeparatorPrimitive from "@radix-ui/react-separator"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  label?: string
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  label,
  ...props
}: SeparatorProps) {
  if (label && orientation === "horizontal") {
    return (
      <div
        data-slot="separator-with-label"
        className="relative flex items-center py-4"
      >
        <div className="flex-1">
          <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
              "bg-border-subtle shrink-0",
              "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
              "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
              className
            )}
            {...props}
          />
        </div>

        {label && (
          <span className="px-4 text-xs font-medium text-content-tertiary uppercase tracking-wide">
            {label}
          </span>
        )}

        <div className="flex-1">
          <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
              "bg-border-subtle shrink-0",
              "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
              "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
              className
            )}
            {...props}
          />
        </div>
      </div>
    )
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border-subtle shrink-0",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator, type SeparatorProps }