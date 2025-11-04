import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm transition-apple",
        "placeholder:text-muted-foreground",
        "hover:border-border-subtle",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "aria-invalid:border-danger aria-invalid:ring-danger/20",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }