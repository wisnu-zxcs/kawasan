import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Card Component
 * 
 * Design Principles:
 * - Elevated surfaces with subtle shadows
 * - Clean hierarchy and spacing
 * - Smooth hover interactions
 * - Flexible composition
 * - Glass morphism support
 */

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  glass?: boolean
  elevated?: boolean
  interactive?: boolean
}

function Card({
  className,
  glass = false,
  elevated = false,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      data-glass={glass}
      data-elevated={elevated}
      data-interactive={interactive}
      className={cn(
        /* Base Styles */
        [
          "flex flex-col",
          "rounded-2xl",
          "bg-surface",
          "border border-border-default",
          "overflow-hidden",
        ],

        /* Glass Effect */
        glass && [
          "backdrop-blur-xl backdrop-saturate-150",
          "bg-surface/80",
          "border-border-subtle",
        ],

        /* Elevated Shadow */
        elevated && "shadow-lg",

        /* Interactive State */
        interactive && [
          "transition-all duration-200 ease-out",
          "hover:shadow-xl hover:scale-[1.02]",
          "hover:border-border-emphasis",
          "cursor-pointer",
          "active:scale-[0.99]",
        ],

        className
      )}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-2 p-6",
        "border-b border-border-subtle",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-xl font-semibold tracking-tight",
        "text-content-primary",
        "leading-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-sm font-normal",
        "text-content-secondary",
        "leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "p-6",
        "flex-1",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-3 p-6",
        "border-t border-border-subtle",
        "bg-surface-secondary/50",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  type CardProps,
}

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent