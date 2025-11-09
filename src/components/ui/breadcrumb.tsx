import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Breadcrumb Component
 * 
 * Design Principles:
 * - Clear navigation hierarchy
 * - Subtle separators
 * - Interactive links
 * - Current page emphasis
 */

function Breadcrumb({
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      {...props}
    />
  )
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-2 text-sm",
        "text-content-secondary",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "hover:text-content-primary transition-colors",
        "outline-none focus-visible:text-brand",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      aria-disabled="true"
      aria-current="page"
      data-slot="breadcrumb-page"
      className={cn(
        "font-medium text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      data-slot="breadcrumb-separator"
      className={cn("text-content-tertiary", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon className="size-4" />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      data-slot="breadcrumb-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

Breadcrumb.List = BreadcrumbList
Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Link = BreadcrumbLink
Breadcrumb.Page = BreadcrumbPage
Breadcrumb.Separator = BreadcrumbSeparator
Breadcrumb.Ellipsis = BreadcrumbEllipsis