import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Alert Component
 * 
 * Design Principles:
 * - Clear visual hierarchy
 * - Semantic color variants
 * - Icon support for quick recognition
 * - Comfortable padding and spacing
 * - Subtle backgrounds
 */

const alertVariants = cva(
  /* Base Styles */
  [
    "relative w-full rounded-xl",
    "px-4 py-3.5",
    "text-sm",
    "border-2",
    "flex gap-3 items-start",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-surface-secondary",
          "border-border-default",
          "text-content-primary",
          "[&>svg]:text-content-secondary",
        ],
        info: [
          "bg-brand-subtle",
          "border-brand/30",
          "text-content-primary",
          "[&>svg]:text-brand",
        ],
        success: [
          "bg-success/10",
          "border-success/30",
          "text-content-primary",
          "[&>svg]:text-success",
        ],
        warning: [
          "bg-warning/10",
          "border-warning/30",
          "text-content-primary",
          "[&>svg]:text-warning",
        ],
        danger: [
          "bg-danger/10",
          "border-danger/30",
          "text-content-primary",
          "[&>svg]:text-danger",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps
  extends React.ComponentPropsWithoutRef<"div">,
  VariantProps<typeof alertVariants> { }

function Alert({
  className,
  variant,
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="alert-icon"
      className={cn(
        "shrink-0 [&>svg]:size-5",
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-semibold tracking-tight",
        "leading-tight",
        "mb-1",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm leading-relaxed",
        "[&>a]:underline [&>a]:underline-offset-2",
        "[&>a]:font-medium",
        "[&>a:hover]:text-interactive-hover",
        className
      )}
      {...props}
    />
  )
}

function AlertContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex-1 flex flex-col", className)}
      {...props}
    />
  )
}

export {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertContent,
  type AlertProps,
}

Alert.Icon = AlertIcon
Alert.Title = AlertTitle
Alert.Description = AlertDescription
Alert.Content = AlertContent