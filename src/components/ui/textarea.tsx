import type * as React from "react"
import { cn } from "@/services/helper/cn"

interface TextareaProps extends React.ComponentProps<"textarea"> {
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
        "placeholder:text-content-tertiary",
        "selection:bg-brand-subtle",
        "selection:text-content-primary",
        "hover:border-border-emphasis",
        "hover:bg-surface-secondary",
        [
          "focus:border-brand",
          "focus:ring-4 focus:ring-brand/20",
          "focus:bg-canvas",
        ],
        error && [
          "border-danger",
          "focus:border-danger",
          "focus:ring-danger/20",
        ],
        success && [
          "border-success",
          "focus:border-success",
          "focus:ring-success/20",
        ],
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