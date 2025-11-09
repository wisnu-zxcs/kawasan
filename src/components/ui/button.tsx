import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Button Component
 * 
 * Design Principles:
 * - Clean, minimal aesthetic
 * - Strong visual hierarchy
 * - Smooth, refined interactions
 * - Clear focus states
 * - Semantic color system
 */

const buttonVariants = cva(
  /* Base styles - Apple's refined foundation */
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl font-medium tracking-tight",
    "transition-all duration-200 ease-out",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        /* Primary - Yellow brand emphasis */
        primary: [
          "bg-brand text-brand-on-emphasis",
          "hover:bg-brand-emphasis",
          "active:scale-[0.98]",
          "focus-visible:outline-brand-emphasis",
          "shadow-sm hover:shadow-md",
        ],

        /* Secondary - Subtle surface */
        secondary: [
          "bg-surface-secondary text-content-primary",
          "hover:bg-surface-tertiary",
          "active:scale-[0.98]",
          "focus-visible:outline-border-emphasis",
          "border border-border-default",
        ],

        /* Outline - Clean border emphasis */
        outline: [
          "bg-transparent text-content-primary",
          "border-2 border-border-default",
          "hover:bg-surface-secondary hover:border-border-emphasis",
          "active:scale-[0.98]",
          "focus-visible:outline-border-emphasis",
        ],

        /* Ghost - Minimal presence */
        ghost: [
          "bg-transparent text-content-primary",
          "hover:bg-surface-secondary",
          "active:bg-surface-tertiary",
          "focus-visible:outline-border-emphasis",
        ],

        /* Danger - Destructive actions */
        danger: [
          "bg-danger text-white",
          "hover:bg-danger-emphasis",
          "active:scale-[0.98]",
          "focus-visible:outline-danger-emphasis",
          "shadow-sm hover:shadow-md",
        ],

        /* Link - Text-only interactive */
        link: [
          "bg-transparent text-interactive",
          "hover:text-interactive-hover underline-offset-4",
          "hover:underline",
          "focus-visible:outline-interactive",
        ],
      },

      size: {
        /* Size scale - Apple's proportional system */
        sm: "h-8 px-3 text-sm gap-1.5 rounded-lg [&_svg]:size-3.5",
        md: "h-10 px-4 text-sm gap-2 [&_svg]:size-4",
        lg: "h-12 px-6 text-base gap-2.5 [&_svg]:size-5",
        xl: "h-14 px-8 text-lg gap-3 [&_svg]:size-6",

        /* Icon sizes */
        "icon-sm": "size-8 p-0 rounded-lg [&_svg]:size-4",
        "icon-md": "size-10 p-0 [&_svg]:size-5",
        "icon-lg": "size-12 p-0 [&_svg]:size-6",
        "icon-xl": "size-14 p-0 [&_svg]:size-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Spinner />
      )}
      {children}
    </Comp>
  )
}

export { Button, buttonVariants, type ButtonProps }