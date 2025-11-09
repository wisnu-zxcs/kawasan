"use client"

import type * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Drawer Component (Mobile-first slide-up)
 * 
 * Design Principles:
 * - Mobile-optimized bottom sheet
 * - Drag-to-dismiss gesture
 * - Smooth spring animations
 * - Visual drag handle
 */

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        /* Base Styles */
        [
          "fixed inset-0 z-50",
          "bg-overlay",
          "backdrop-blur-sm",
        ],

        /* Animation */
        [
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:fade-in-0",
        ],

        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          /* Base Styles */
          [
            "group/drawer-content",
            "fixed z-50",
            "flex flex-col",
            "bg-surface",
            "border-2 border-border-default",
          ],

          /* Direction Specific Styles */
          [
            // Bottom (default)
            "data-[vaul-drawer-direction=bottom]:inset-x-0",
            "data-[vaul-drawer-direction=bottom]:bottom-0",
            "data-[vaul-drawer-direction=bottom]:mt-24",
            "data-[vaul-drawer-direction=bottom]:max-h-[85vh]",
            "data-[vaul-drawer-direction=bottom]:rounded-t-2xl",
            "data-[vaul-drawer-direction=bottom]:border-b-0",

            // Top
            "data-[vaul-drawer-direction=top]:inset-x-0",
            "data-[vaul-drawer-direction=top]:top-0",
            "data-[vaul-drawer-direction=top]:mb-24",
            "data-[vaul-drawer-direction=top]:max-h-[85vh]",
            "data-[vaul-drawer-direction=top]:rounded-b-2xl",
            "data-[vaul-drawer-direction=top]:border-t-0",

            // Right
            "data-[vaul-drawer-direction=right]:inset-y-0",
            "data-[vaul-drawer-direction=right]:right-0",
            "data-[vaul-drawer-direction=right]:w-3/4",
            "data-[vaul-drawer-direction=right]:rounded-l-2xl",
            "data-[vaul-drawer-direction=right]:border-r-0",
            "data-[vaul-drawer-direction=right]:sm:max-w-md",

            // Left
            "data-[vaul-drawer-direction=left]:inset-y-0",
            "data-[vaul-drawer-direction=left]:left-0",
            "data-[vaul-drawer-direction=left]:w-3/4",
            "data-[vaul-drawer-direction=left]:rounded-r-2xl",
            "data-[vaul-drawer-direction=left]:border-l-0",
            "data-[vaul-drawer-direction=left]:sm:max-w-md",
          ],

          className
        )}
        {...props}
      >
        {/* Drag Handle */}
        <div
          className={cn(
            "mx-auto mt-4 h-1.5 w-16 shrink-0 rounded-full",
            "bg-border-default",
            "hidden",
            "group-data-[vaul-drawer-direction=bottom]/drawer-content:block",
            "group-data-[vaul-drawer-direction=top]/drawer-content:block",
            "group-data-[vaul-drawer-direction=top]/drawer-content:mt-0",
            "group-data-[vaul-drawer-direction=top]/drawer-content:mb-4",
          )}
        />

        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-2 p-6",
        "text-center",
        "group-data-[vaul-drawer-direction=right]/drawer-content:text-left",
        "group-data-[vaul-drawer-direction=left]/drawer-content:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        "mt-auto flex flex-col gap-2 p-6",
        className
      )}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "text-lg font-semibold tracking-tight",
        "text-content-primary",
        "leading-tight",
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        "text-sm leading-relaxed",
        "text-content-secondary",
        className
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

Drawer.Portal = DrawerPortal
Drawer.Overlay = DrawerOverlay
Drawer.Trigger = DrawerTrigger
Drawer.Close = DrawerClose
Drawer.Content = DrawerContent
Drawer.Header = DrawerHeader
Drawer.Footer = DrawerFooter
Drawer.Title = DrawerTitle
Drawer.Description = DrawerDescription