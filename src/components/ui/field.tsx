"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/services/helper/cn"

function FieldSet({
  className,
  ...props
}: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & {
  variant?: "legend" | "label"
}) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-semibold tracking-tight",
        "text-content-primary",
        variant === "legend" && "text-base",
        variant === "label" && "text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3",
  {
    variants: {
      orientation: {
        vertical: "flex-col",
        horizontal: "flex-row items-start",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"fieldset"> & VariantProps<typeof fieldVariants>) {
  return (
    <fieldset
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "flex flex-1 flex-col gap-2",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group-data-[disabled=true]/field:opacity-40",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-title"
      className={cn(
        "text-sm font-medium",
        "text-content-primary",
        "group-data-[disabled=true]/field:opacity-40",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-sm leading-relaxed",
        "text-content-secondary",
        "[&>a]:text-interactive [&>a]:underline [&>a]:underline-offset-2",
        "[&>a:hover]:text-interactive-hover",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  if (!children) {
    return <Separator className={className} {...props} />
  }

  return (
    <div
      data-slot="field-separator"
      className={cn("relative flex items-center py-4", className)}
      {...props}
    >
      <div className="flex-1">
        <Separator />
      </div>
      <span className="px-4 text-xs font-medium text-content-tertiary uppercase tracking-wide">
        {children}
      </span>
      <div className="flex-1">
        <Separator />
      </div>
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error) =>
            error?.message && <li key={error.message}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn(
        "text-sm font-medium",
        "text-danger",
        className
      )}
      {...props}
    >
      {content}
    </div>
  )
}

export { Field, FieldSet }

Field.Label = FieldLabel
Field.Description = FieldDescription
Field.Error = FieldError
Field.Group = FieldGroup
Field.Legend = FieldLegend
Field.Separator = FieldSeparator
Field.Content = FieldContent
Field.Title = FieldTitle