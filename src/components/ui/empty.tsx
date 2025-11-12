import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/services/helper/cn"

function Empty({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center",
        "gap-6 p-12",
        "text-center",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-3 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent [&_svg]:size-12 [&_svg]:text-content-tertiary",
        icon: [
          "bg-surface-secondary",
          "size-16 rounded-2xl",
          "[&_svg]:size-8 [&_svg]:text-content-secondary",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-media"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function EmptyTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="empty-title"
      className={cn(
        "text-lg font-semibold tracking-tight",
        "text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        "text-sm leading-relaxed",
        "text-content-secondary",
        "[&>a]:text-interactive [&>a]:underline [&>a]:underline-offset-2",
        "[&>a:hover]:text-interactive-hover",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm flex-col items-center gap-4",
        className
      )}
      {...props}
    />
  )
}

export { Empty }

Empty.Header = EmptyHeader
Empty.Title = EmptyTitle
Empty.Description = EmptyDescription
Empty.Content = EmptyContent
Empty.Media = EmptyMedia