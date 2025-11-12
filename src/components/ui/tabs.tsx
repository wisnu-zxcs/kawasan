"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        [
          "inline-flex items-center justify-start",
          "gap-1 p-1",
          "rounded-xl",
          "bg-surface-secondary",
          "border border-border-subtle",
        ],
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        [
          "inline-flex items-center justify-center gap-2",
          "px-4 py-2",
          "rounded-lg",
          "text-sm font-medium",
          "whitespace-nowrap",
          "transition-all duration-200 ease-out",
          "outline-none",
        ],
        [
          "text-content-secondary",
          "hover:text-content-primary",
          "hover:bg-surface-tertiary",
        ],
        [
          "data-[state=active]:bg-canvas",
          "data-[state=active]:text-content-primary",
          "data-[state=active]:shadow-sm",
        ],
        [
          "focus-visible:ring-2",
          "focus-visible:ring-brand/30",
        ],
        [
          "disabled:pointer-events-none",
          "disabled:opacity-40",
        ],
        "[&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        [
          "flex-1",
          "outline-none",
          "rounded-xl",
        ],
        [
          "data-[state=active]:animate-in",
          "data-[state=active]:fade-in-0",
          "data-[state=active]:slide-in-from-bottom-2",
        ],
        [
          "focus-visible:ring-2",
          "focus-visible:ring-brand/30",
        ],
        className
      )}
      {...props}
    />
  )
}

export { Tabs }

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent