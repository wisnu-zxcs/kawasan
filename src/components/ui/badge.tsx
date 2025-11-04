import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-apple whitespace-nowrap [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        brand: "bg-brand text-brand-foreground",
        "brand-subtle": "bg-brand-subtle text-brand border border-brand/20",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-border bg-transparent",
        danger: "bg-danger text-danger-foreground",
        "danger-subtle": "bg-danger-subtle text-danger border border-danger/20",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        base: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "base",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }