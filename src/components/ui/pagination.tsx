import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Pagination Component
 * 
 * Design Principles:
 * - Clear page navigation
 * - Active state emphasis
 * - Comfortable touch targets
 * - Previous/Next labels
 */

function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

interface PaginationLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean
  size?: "sm" | "md" | "lg"
}

function PaginationLink({
  className,
  isActive = false,
  size = "md",
  ...props
}: PaginationLinkProps) {
  const sizeClasses = {
    sm: "h-8 min-w-8 px-2 text-xs",
    md: "h-9 min-w-9 px-3 text-sm",
    lg: "h-10 min-w-10 px-4 text-base",
  }

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        /* Base Styles */
        [
          "inline-flex items-center justify-center gap-1",
          "rounded-lg",
          "font-medium",
          "transition-colors",
          "outline-none",
        ],

        /* Size */
        sizeClasses[size],

        /* Default State */
        !isActive && [
          "text-content-secondary",
          "hover:bg-surface-secondary",
          "hover:text-content-primary",
        ],

        /* Active State */
        isActive && [
          "bg-brand",
          "text-brand-on-emphasis",
          "pointer-events-none",
        ],

        /* Focus State */
        "focus-visible:ring-2 focus-visible:ring-brand/30",

        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1", className)}
      {...props}
    >
      <ChevronRightIcon className="size-4 rotate-180" />
      <span>Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn("gap-1", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex h-9 w-9 items-center justify-center",
        "text-content-tertiary",
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

Pagination.Content = PaginationContent
Pagination.Ellipsis = PaginationEllipsis
Pagination.Item = PaginationItem
Pagination.Link = PaginationLink
Pagination.Next = PaginationNext
Pagination.Previous = PaginationPrevious