"use client"

import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  Loader2Icon,
  XCircleIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { cn } from "@/services/helper/cn"

function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CheckCircle2Icon className="size-5" />,
        info: <InfoIcon className="size-5" />,
        warning: <AlertTriangleIcon className="size-5" />,
        error: <XCircleIcon className="size-5" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      position="top-right"
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast",
            "rounded-xl border-2 shadow-xl",
            "backdrop-blur-xl backdrop-saturate-150",
            "px-4 py-3.5 gap-3",
          ),
          title: "text-sm font-semibold tracking-tight",
          description: "text-sm leading-relaxed opacity-90",
          actionButton: cn(
            "rounded-lg px-3 py-1.5",
            "text-sm font-medium",
            "bg-brand text-brand-on-emphasis",
            "hover:bg-brand-emphasis",
            "transition-colors",
          ),
          cancelButton: cn(
            "rounded-lg px-3 py-1.5",
            "text-sm font-medium",
            "bg-surface-secondary text-content-primary",
            "hover:bg-surface-tertiary",
            "transition-colors",
          ),
          closeButton: cn(
            "rounded-lg p-1",
            "hover:bg-surface-secondary",
            "transition-colors",
          ),
        },
      }}
      style={
        {
          "--normal-bg": "var(--surface)",
          "--normal-border": "var(--border-default)",
          "--normal-text": "var(--content-primary)",
          "--success-bg": "color-mix(in oklch, var(--success) 10%, var(--surface))",
          "--success-border": "color-mix(in oklch, var(--success) 30%, transparent)",
          "--success-text": "var(--content-primary)",
          "--info-bg": "var(--brand-subtle)",
          "--info-border": "color-mix(in oklch, var(--brand) 30%, transparent)",
          "--info-text": "var(--content-primary)",
          "--warning-bg": "color-mix(in oklch, var(--warning) 10%, var(--surface))",
          "--warning-border": "color-mix(in oklch, var(--warning) 30%, transparent)",
          "--warning-text": "var(--content-primary)",
          "--error-bg": "color-mix(in oklch, var(--danger) 10%, var(--surface))",
          "--error-border": "color-mix(in oklch, var(--danger) 30%, transparent)",
          "--error-text": "var(--content-primary)",
          "--border-radius": "12px",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

/**
 * Usage Example:
 * 
 * import { toast } from "sonner"
 * 
 * // Success toast
 * toast.success("Changes saved", {
 *   description: "Your profile has been updated successfully."
 * })
 * 
 * // Error toast
 * toast.error("Failed to save", {
 *   description: "Please try again later.",
 *   action: {
 *     label: "Retry",
 *     onClick: () => console.log("Retry"),
 *   },
 * })
 * 
 * // Loading toast
 * const id = toast.loading("Saving changes...")
 * // Later...
 * toast.success("Saved!", { id })
 */