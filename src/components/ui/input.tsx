import type * as React from "react"
import { cn } from "@/services/helper/cn"

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean
  success?: boolean
}

function Input({
  className,
  type,
  error = false,
  success = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-error={error}
      data-success={success}
      className={cn(
        [
          "flex w-full rounded-xl",
          "px-4 py-2.5 h-11",
          "text-sm font-normal",
          "bg-surface text-content-primary",
          "border-2 border-border-default",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],
        "placeholder:text-content-tertiary",
        "placeholder:font-normal",
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
          "text-danger",
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
        [
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",
          "file:text-content-primary",
          "file:mr-4",
          "file:py-1 file:px-3",
          "file:rounded-lg",
          "file:bg-surface-secondary",
          "file:hover:bg-surface-tertiary",
          "file:transition-colors",
          "file:cursor-pointer",
        ],
        className
      )}
      {...props}
    />
  )
}

export { Input, type InputProps }