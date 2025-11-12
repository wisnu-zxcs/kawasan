"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

function Sheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        [
          "fixed inset-0 z-50",
          "bg-overlay",
          "backdrop-blur-sm",
        ],
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

interface SheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: "top" | "right" | "bottom" | "left"
}

function SheetContent({
  side = "right",
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          [
            "fixed z-50",
            "flex flex-col gap-6",
            "bg-surface",
            "border-border-default",
            "shadow-2xl",
            "p-6",
          ],
          side === "top" && [
            "inset-x-0 top-0",
            "border-b-2",
            "rounded-b-2xl",
            "max-h-[90vh]",
          ],
          side === "bottom" && [
            "inset-x-0 bottom-0",
            "border-t-2",
            "rounded-t-2xl",
            "max-h-[90vh]",
          ],
          side === "left" && [
            "inset-y-0 left-0",
            "border-r-2",
            "rounded-r-2xl",
            "w-3/4 sm:max-w-md",
            "overflow-y-auto",
          ],
          side === "right" && [
            "inset-y-0 right-0",
            "border-l-2",
            "rounded-l-2xl",
            "w-3/4 sm:max-w-md",
            "overflow-y-auto",
          ],
          [
            "transition ease-out",
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:duration-300",
            "data-[state=open]:duration-500",
          ],
          side === "top" && [
            "data-[state=closed]:slide-out-to-top",
            "data-[state=open]:slide-in-from-top",
          ],
          side === "bottom" && [
            "data-[state=closed]:slide-out-to-bottom",
            "data-[state=open]:slide-in-from-bottom",
          ],
          side === "left" && [
            "data-[state=closed]:slide-out-to-left",
            "data-[state=open]:slide-in-from-left",
          ],
          side === "right" && [
            "data-[state=closed]:slide-out-to-right",
            "data-[state=open]:slide-in-from-right",
          ],
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={cn(
            "absolute top-4 right-4",
            "rounded-lg p-1.5",
            "text-content-tertiary",
            "hover:text-content-primary",
            "hover:bg-surface-secondary",
            "transition-colors",
            "outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-brand/30",
          )}
        >
          <XIcon className="size-5" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-2",
        "pr-8",
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-2",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
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

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm leading-relaxed",
        "text-content-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Sheet }

Sheet.Portal = SheetPortal
Sheet.Overlay = SheetOverlay
Sheet.Trigger = SheetTrigger
Sheet.Close = SheetClose
Sheet.Content = SheetContent
Sheet.Header = SheetHeader
Sheet.Footer = SheetFooter
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription