"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  showValue?: boolean
  size?: "sm" | "md" | "lg"
}

function Progress({
  className,
  value = 0,
  showValue = false,
  size = "md",
  ...props
}: ProgressProps) {
  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  }

  return (
    <div className="w-full space-y-2">
      <ProgressPrimitive.Root
        data-slot="progress"
        data-size={size}
        className={cn(
          [
            "relative w-full overflow-hidden",
            "rounded-full",
            "bg-surface-secondary",
          ],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            "h-full w-full flex-1",
            "bg-brand",
            "transition-all duration-500 ease-out",
            "rounded-full",
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <div className="flex justify-between items-center text-xs text-content-tertiary">
          <span>{Math.round(value || 0)}%</span>
        </div>
      )}
    </div>
  )
}

export { Progress, type ProgressProps }