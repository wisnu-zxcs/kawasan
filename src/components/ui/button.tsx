import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-apple disabled:pointer-events-none disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[1.125rem] shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Yellow brand color
        brand: "bg-brand text-brand-foreground shadow-sm hover:bg-brand/90 active:scale-[0.98]",

        // Secondary - Subtle background
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:scale-[0.98]",

        // Outline - Border style
        outline: "border-2 border-border bg-transparent hover:bg-emphasis hover:text-emphasis-foreground active:scale-[0.98]",

        // Ghost - Minimal style
        ghost: "hover:bg-emphasis hover:text-emphasis-foreground active:scale-[0.98]",

        // Danger - Destructive actions
        danger: "bg-danger text-danger-foreground shadow-sm hover:bg-danger/90 active:scale-[0.98]",

        // Link - Text style
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs gap-1.5 has-[>svg]:px-2",
        base: "h-10 rounded-lg px-4 text-sm has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-6 text-base has-[>svg]:px-4",
        "icon-sm": "size-8 rounded-md p-0",
        "icon-base": "size-10 rounded-lg p-0",
        "icon-lg": "size-12 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "base",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }