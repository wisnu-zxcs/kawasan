"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: "sm" | "md" | "lg" | "xl"
}

function Avatar({
  className,
  size = "md",
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
    xl: "size-16",
  }

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        [
          "relative flex shrink-0",
          "overflow-hidden rounded-full",
          "border-2 border-border-subtle",
          "bg-surface-secondary",
        ],

        sizeClasses[size],

        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        [
          "flex size-full items-center justify-center",
          "bg-surface-tertiary",
          "text-content-secondary",
          "text-sm font-medium",
          "uppercase",
        ],

        className
      )}
      {...props}
    />
  )
}

function AvatarStatus({
  className,
  variant = "online",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "online" | "offline" | "away" | "busy"
}) {
  const variantClasses = {
    online: "bg-success",
    offline: "bg-border-default",
    away: "bg-warning",
    busy: "bg-danger",
  }

  return (
    <span
      data-slot="avatar-status"
      data-variant={variant}
      className={cn(
        [
          "absolute bottom-0 right-0",
          "size-3",
          "rounded-full",
          "border-2 border-canvas",
        ],

        variantClasses[variant],

        className
      )}
      {...props}
    />
  )
}

export { Avatar, type AvatarProps, }

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback
Avatar.Status = AvatarStatus