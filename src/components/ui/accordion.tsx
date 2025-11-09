"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

/**
 * Apple-Inspired Accordion Component
 * 
 * Design Principles:
 * - Smooth expand/collapse animation
 * - Clear visual hierarchy
 * - Comfortable touch targets
 * - Subtle borders
 * - Chevron rotation feedback
 */

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-border-subtle last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          /* Base Styles */
          [
            "flex flex-1 items-center justify-between gap-3",
            "py-4",
            "text-left text-sm font-medium",
            "transition-all",
            "outline-none",
          ],

          /* Hover State */
          "hover:text-brand",

          /* Focus State */
          [
            "focus-visible:ring-2",
            "focus-visible:ring-brand/30",
            "focus-visible:rounded-lg",
          ],

          /* Icon Rotation */
          "[&[data-state=open]>svg]:rotate-180",

          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-4 shrink-0 text-content-tertiary transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        /* Animation */
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 text-content-secondary leading-relaxed">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
}

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent