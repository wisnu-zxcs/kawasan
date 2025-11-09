import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Navigation Menu Component
 * 
 * Design Principles:
 * - Dropdown navigation
 * - Smooth animations
 * - Clear active states
 * - Accessible keyboard navigation
 */

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  [
    "group inline-flex items-center justify-center gap-1",
    "h-10 px-4 py-2",
    "rounded-xl",
    "text-sm font-medium",
    "transition-all duration-200",
    "outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-content-primary",
          "hover:bg-surface-secondary",
          "data-[state=open]:bg-surface-secondary",
          "focus-visible:ring-2 focus-visible:ring-brand/30",
        ],
        ghost: [
          "text-content-secondary",
          "hover:text-content-primary hover:bg-surface-secondary",
          "data-[state=open]:text-content-primary data-[state=open]:bg-surface-secondary",
          "focus-visible:ring-2 focus-visible:ring-brand/30",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        /* Animation */
        [
          "data-[motion^=from-]:animate-in",
          "data-[motion^=to-]:animate-out",
          "data-[motion^=from-]:fade-in",
          "data-[motion^=to-]:fade-out",
          "data-[motion=from-end]:slide-in-from-right-8",
          "data-[motion=from-start]:slide-in-from-left-8",
          "data-[motion=to-end]:slide-out-to-right-8",
          "data-[motion=to-start]:slide-out-to-left-8",
        ],

        /* Position */
        "top-0 left-0 w-full p-2 md:absolute md:w-auto",

        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-0 isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          /* Base Styles */
          [
            "relative mt-2",
            "origin-top-center",
            "overflow-hidden",
            "rounded-xl",
            "border-2 border-border-default",
            "bg-surface",
            "shadow-xl",
          ],

          /* Animation */
          [
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
          ],

          /* Dynamic Sizing */
          "h-(--radix-navigation-menu-viewport-height)",
          "w-full md:w-(--radix-navigation-menu-viewport-width)",

          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        /* Base Styles */
        [
          "flex flex-col gap-1",
          "p-3 rounded-lg",
          "text-sm",
          "transition-colors",
          "outline-none",
        ],

        /* States */
        [
          "hover:bg-surface-secondary",
          "focus:bg-surface-secondary",
          "data-[active=true]:bg-surface-secondary",
        ],

        /* Focus */
        "focus-visible:ring-2 focus-visible:ring-brand/30",

        /* Icon */
        "[&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-content-tertiary",

        className
      )}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

NavigationMenu.List = NavigationMenuList
NavigationMenu.Item = NavigationMenuItem
NavigationMenu.Content = NavigationMenuContent
NavigationMenu.Trigger = NavigationMenuTrigger
NavigationMenu.Link = NavigationMenuLink
NavigationMenu.Viewport = NavigationMenuViewport