import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/services/helper/cn"

const skeletonVariants = cva(
  [
    "bg-surface-tertiary",
    "animate-pulse",
  ],
  {
    variants: {
      variant: {
        default: "rounded-xl",
        text: "rounded-lg h-4",
        circle: "rounded-full",
        card: "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SkeletonProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof skeletonVariants> { }

function Skeleton({
  className,
  variant,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-variant={variant}
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
}

function SkeletonText({
  className,
  lines = 3,
  ...props
}: React.ComponentProps<"div"> & { lines?: number }) {
  return (
    <div
      data-slot="skeleton-text"
      className={cn("space-y-2", className)}
      {...props}
    >
      {Array.from({ length: lines }).map(() => (
        <Skeleton
          key={crypto.randomUUID()}
          variant="text"
          className={cn()}
        />
      ))}
    </div>
  )
}

function SkeletonCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Skeleton
      data-slot="skeleton-card"
      variant="card"
      className={cn("p-6 space-y-4", className)}
      {...props}
    >
      <div className="space-y-3">
        <Skeleton variant="text" className="h-6 w-2/3" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-4/5" />
      </div>
    </Skeleton>
  )
}

function SkeletonAvatar({
  className,
  size = "md",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
    xl: "size-16",
  }

  return (
    <Skeleton
      data-slot="skeleton-avatar"
      variant="circle"
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  )
}

export { Skeleton, type SkeletonProps }

Skeleton.Text = SkeletonText
Skeleton.Card = SkeletonCard
Skeleton.Avatar = SkeletonAvatar