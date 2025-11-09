import { cva, type VariantProps } from "class-variance-authority"
import { Loader2Icon } from "lucide-react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Spinner Component
 * 
 * Design Principles:
 * - Smooth rotation
 * - Brand color
 * - Size variants
 * - Accessible loading state
 */

const spinnerVariants = cva(
  /* Base Styles */
  [
    "animate-spin",
    "text-brand",
  ],
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface SpinnerProps
  extends React.ComponentPropsWithoutRef<"svg">,
  VariantProps<typeof spinnerVariants> { }

function Spinner({
  className,
  size,
  ...props
}: SpinnerProps) {
  return (
    <Loader2Icon
      data-slot="spinner"
      data-size={size}
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}

/**
 * Loading State Component
 */

function LoadingState({
  className,
  text = "Loading...",
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  text?: string
}) {
  return (
    <div
      data-slot="loading-state"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-12",
        className
      )}
      {...props}
    >
      <Spinner size="lg" />
      <p className="text-sm text-content-secondary">{text}</p>
    </div>
  )
}

export {
  Spinner,
  LoadingState,
  type SpinnerProps,
}