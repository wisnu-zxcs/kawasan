import { cva, type VariantProps } from "class-variance-authority"
import { Loader2Icon } from "lucide-react"
import { cn } from "@/services/helper/cn"

const spinnerVariants = cva(
  [
    "animate-spin",
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
  extends React.ComponentProps<"svg">,
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

function LoadingState({
  className,
  text = "Loading...",
  ...props
}: React.ComponentProps<"div"> & {
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