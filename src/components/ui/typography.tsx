import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/services/helper/cn"

const LS = {
    display: "-0.022em",
    heading: "-0.019em",
    body: "-0.011em",
    lead: "-0.014em",
    caption: "0.06em",
} as const

const displayVariants = cva(
    ["font-semibold", "tracking-tight", "text-content-primary", "leading-none"],
    {
        variants: {
            size: {
                xl: "text-7xl md:text-8xl lg:text-9xl",
                lg: "text-6xl md:text-7xl lg:text-8xl",
                md: "text-5xl md:text-6xl lg:text-7xl",
                sm: "text-4xl md:text-5xl lg:text-6xl",
            },
            weight: {
                regular: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            },
            gradient: {
                true: "text-gradient-brand",
                false: "",
            },
        },
        defaultVariants: {
            size: "md",
            weight: "semibold",
            gradient: false,
        },
    }
)

type DisplayProps = React.ComponentProps<"h1"> &
    VariantProps<typeof displayVariants> & {
        asChild?: boolean
    }

function Display({ asChild = false, className, style, ...props }: DisplayProps) {
    const Comp = asChild ? Slot : "h1"
    return (
        <Comp
            data-slot="display"
            className={cn(displayVariants(props), className)}
            style={{ letterSpacing: LS.display, ...style }}
            {...props}
        />
    )
}

const headingVariants = cva(
    ["font-semibold", "text-content-primary", "leading-tight"],
    {
        variants: {
            level: {
                1: "text-5xl md:text-6xl",
                2: "text-4xl md:text-5xl",
                3: "text-3xl md:text-4xl",
                4: "text-2xl md:text-3xl",
                5: "text-xl md:text-2xl",
                6: "text-lg md:text-xl",
            },
            weight: {
                regular: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            },
        },
        defaultVariants: { level: 2, weight: "semibold" },
    }
)

type HeadingProps = React.ComponentProps<"h2"> &
    VariantProps<typeof headingVariants> & {
        as?: `h${1 | 2 | 3 | 4 | 5 | 6}`
        asChild?: boolean
    }

function Heading({ asChild = false, as, className, style, ...props }: HeadingProps) {
    const Comp = asChild ? Slot : as || "h2"
    return (
        <Comp
            data-slot="heading"
            className={cn(headingVariants(props), className)}
            style={{ letterSpacing: LS.heading, ...style }}
            {...props}
        />
    )
}

const textVariants = cva(["text-content-primary"], {
    variants: {
        size: {
            xs: "text-xs leading-relaxed",
            sm: "text-sm leading-relaxed",
            base: "text-base leading-relaxed",
            lg: "text-lg leading-relaxed",
            xl: "text-xl leading-relaxed",
        },
        weight: {
            regular: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
        },
        variant: {
            primary: "text-content-primary",
            secondary: "text-content-secondary",
            tertiary: "text-content-tertiary",
            inverse: "text-content-inverse",
            brand: "text-brand",
            success: "text-success",
            warning: "text-warning",
            danger: "text-danger",
        },
        balance: {
            true: "text-balance",
            false: "",
        },
    },
    defaultVariants: { size: "base", weight: "regular", variant: "primary", balance: false },
})

type TextProps = React.ComponentProps<"p"> & VariantProps<typeof textVariants>

function Text({ className, style, ...props }: TextProps) {
    return (
        <p
            data-slot="text"
            className={cn(textVariants(props), className)}
            style={{ letterSpacing: LS.body, ...style }}
            {...props}
        />
    )
}

function Lead({ className, style, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="lead"
            className={cn("text-xl md:text-2xl font-normal text-content-secondary leading-relaxed text-balance", className)}
            style={{ letterSpacing: LS.lead, ...style }}
            {...props}
        />
    )
}

function Caption({ className, style, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="caption"
            className={cn("text-xs font-normal text-content-tertiary uppercase tracking-wider", className)}
            style={{ letterSpacing: LS.caption, ...style }}
            {...props}
        />
    )
}

const codeVariants = cva(["font-mono", "rounded-lg", "border border-border-default"], {
    variants: {
        variant: {
            inline: "px-1.5 py-0.5 text-sm bg-surface-secondary text-content-primary",
            block: "block p-4 text-sm bg-surface text-content-primary overflow-x-auto",
        },
    },
    defaultVariants: { variant: "inline" },
})

type CodeProps = React.ComponentProps<"code"> & VariantProps<typeof codeVariants>

function Code({ className, ...props }: CodeProps) {
    return (
        <code data-slot="code" className={cn(codeVariants(props), className)} {...props} />
    )
}

function Link({ className, ...props }: React.ComponentProps<"a">) {
    return (
        <a
            data-slot="link"
            className={cn(
                "text-interactive font-medium underline-offset-4 hover:underline hover:text-interactive-hover transition-colors",
                className
            )}
            {...props}
        />
    )
}

function Blockquote({ className, ...props }: React.ComponentProps<"blockquote">) {
    return (
        <blockquote
            data-slot="blockquote"
            className={cn(
                "border-l-4 border-brand pl-6 py-2 italic text-content-secondary text-lg",
                className
            )}
            {...props}
        />
    )
}

function List({
    className,
    ordered = false,
    ...props
}: React.ComponentPropsWithoutRef<"ul"> & { ordered?: boolean }) {
    const Comp = ordered ? "ol" : "ul"
    return (
        <Comp
            data-slot="list"
            className={cn("space-y-2 text-content-primary ml-6", ordered ? "list-decimal" : "list-disc", className)}
            {...props}
        />
    )
}

export { Text }

Text.Display = Display
Text.Heading = Heading
Text.Lead = Lead
Text.Caption = Caption
Text.Code = Code
Text.Link = Link
Text.Blockquote = Blockquote
Text.List = List