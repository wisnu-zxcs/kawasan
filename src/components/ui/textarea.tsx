import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Textarea Component
 * 
 * Design Principles:
 * - Auto-resizing with field-sizing
 * - Consistent with Input styling
 * - Comfortable for long-form content
 * - Clear visual feedback
 */

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  error?: boolean
  success?: boolean
}

function Textarea({
  className,
  error = false,
  success = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-error={error}
      data-success={success}
      className={cn(
        /* Base Styles */
        [
          "flex w-full rounded-xl",
          "px-4 py-3",
          "min-h-[100px]",
          "text-sm font-normal leading-relaxed",
          "bg-surface text-content-primary",
          "border-2 border-border-default",
          "transition-all duration-200 ease-out",
          "outline-none",
          "resize-y",
        ],

        /* Placeholder */
        "placeholder:text-content-tertiary",

        /* Selection */
        "selection:bg-brand-subtle",
        "selection:text-content-primary",

        /* Hover State */
        "hover:border-border-emphasis",
        "hover:bg-surface-secondary",

        /* Focus State */
        [
          "focus:border-brand",
          "focus:ring-4 focus:ring-brand/20",
          "focus:bg-canvas",
        ],

        /* Error State */
        error && [
          "border-danger",
          "focus:border-danger",
          "focus:ring-danger/20",
        ],

        /* Success State */
        success && [
          "border-success",
          "focus:border-success",
          "focus:ring-success/20",
        ],

        /* Disabled State */
        [
          "disabled:opacity-40",
          "disabled:cursor-not-allowed",
          "disabled:bg-surface-tertiary",
        ],

        className
      )}
      {...props}
    />
  )
}

export { Textarea, type TextareaProps }