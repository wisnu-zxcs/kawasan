import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/services/helper/cn"

function ItemGroup({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="item-group"
      className={cn(
        "group/item-group flex flex-col",
        className
      )}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "group/item flex items-center text-sm transition-colors outline-none",
  {
    variants: {
      variant: {
        default: [
          "bg-transparent",
          "border border-transparent",
        ],
        outline: [
          "border border-border-default",
          "rounded-xl",
        ],
        ghost: [
          "bg-transparent",
          "hover:bg-surface-secondary",
          "rounded-xl",
          "border border-transparent",
        ],
      },
      size: {
        default: "p-4 gap-4",
        sm: "p-3 gap-3",
        lg: "p-5 gap-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ItemProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof itemVariants> {
  asChild?: boolean
}

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ItemProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent [&_svg]:size-5",
        icon: [
          "size-10 rounded-xl",
          "bg-surface-secondary",
          "border border-border-subtle",
          "[&_svg]:size-5",
        ],
        image: [
          "size-12 rounded-xl overflow-hidden",
          "[&_img]:size-full [&_img]:object-cover",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(
        itemMediaVariants({ variant }),
        "group-has-data-[slot=item-description]/item:self-start",
        className
      )}
      {...props}
    />
  )
}

function ItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "font-medium leading-snug",
        "text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-sm leading-normal line-clamp-2",
        "text-content-secondary",
        "[&>a]:text-interactive [&>a]:underline [&>a]:underline-offset-2",
        "[&>a:hover]:text-interactive-hover",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn(
        "flex items-center gap-2 ml-auto",
        className
      )}
      {...props}
    />
  )
}

function ItemHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex w-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex w-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

export { Item }

Item.Media = ItemMedia
Item.Content = ItemContent
Item.Actions = ItemActions
Item.Group = ItemGroup
Item.Separator = ItemSeparator
Item.Title = ItemTitle
Item.Description = ItemDescription
Item.Header = ItemHeader
Item.Footer = ItemFooter