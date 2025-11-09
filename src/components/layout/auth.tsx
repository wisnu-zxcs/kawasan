/**
 * Modular Auth Components - DRY Architecture
 * 
 * This file contains reusable auth components that can be composed
 * to create sign-in, sign-up, and recovery pages.
 */

"use client"

import { useState } from "react"
import { Loader2Icon, EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/services/helper/cn"

/**
 * Auth Container - Main wrapper for auth pages
 */
interface AuthContainerProps {
    children: React.ReactNode
    className?: string
}

export function AuthContainer({ children, className }: AuthContainerProps) {
    return (
        <div className={cn(
            "min-h-screen flex items-center justify-center",
            "bg-canvas p-4",
            className
        )}>
            <div className={cn(
                "w-full max-w-md",
                "bg-surface rounded-2xl",
                "border-2 border-border-default",
                "shadow-xl",
                "p-8",
                "space-y-6"
            )}>
                {children}
            </div>
        </div>
    )
}

/**
 * Auth Header - Logo and title section
 */
interface AuthHeaderProps {
    title: string
    description?: string
    logo?: React.ReactNode
}

export function AuthHeader({ title, description, logo }: AuthHeaderProps) {
    return (
        <div className="space-y-3 text-center">
            {logo && (
                <div className="flex justify-center mb-2">
                    {logo}
                </div>
            )}
            <h1 className="text-2xl font-semibold tracking-tight text-content-primary">
                {title}
            </h1>
            {description && (
                <p className="text-sm text-content-secondary leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    )
}

/**
 * Auth Form - Main form wrapper with loading state
 */
interface AuthFormProps extends React.ComponentPropsWithoutRef<"form"> {
    isLoading?: boolean
}

export function AuthForm({
    children,
    isLoading = false,
    className,
    ...props
}: AuthFormProps) {
    return (
        <form
            className={cn("space-y-4", className)}
            {...props}
        >
            <fieldset disabled={isLoading} className="space-y-4">
                {children}
            </fieldset>
        </form>
    )
}

/**
 * Auth Field - Form field with label
 */
interface AuthFieldProps {
    label: string
    required?: boolean
    error?: string
    children: React.ReactNode
}

export function AuthField({ label, required, error, children }: AuthFieldProps) {
    return (
        <div className="space-y-2">
            <Label required={required}>{label}</Label>
            {children}
            {error && (
                <p className="text-sm font-medium text-danger">
                    {error}
                </p>
            )}
        </div>
    )
}

/**
 * Password Input - Input with show/hide toggle
 */
interface PasswordInputProps extends React.ComponentPropsWithoutRef<"input"> {
    error?: boolean
}

export function PasswordInput({
    error,
    className,
    ...props
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative">
            <Input
                type={showPassword ? "text" : "password"}
                error={error}
                className={cn("pr-10", className)}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2",
                    "text-content-tertiary hover:text-content-primary",
                    "transition-colors",
                    "outline-none focus-visible:text-brand"
                )}
                tabIndex={-1}
            >
                {showPassword ? (
                    <EyeOffIcon className="size-4" />
                ) : (
                    <EyeIcon className="size-4" />
                )}
            </button>
        </div>
    )
}

/**
 * Password Strength Indicator
 */
interface PasswordStrengthProps {
    password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
    const requirements = [
        { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
        { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
        { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
        { label: "One number", test: (p: string) => /\d/.test(p) },
    ]

    const metRequirements = requirements.filter(req => req.test(password)).length
    const strength = metRequirements === 0 ? 0 : (metRequirements / requirements.length) * 100

    const getStrengthColor = () => {
        if (strength === 0) return "bg-border-default"
        if (strength < 50) return "bg-danger"
        if (strength < 75) return "bg-warning"
        return "bg-success"
    }

    const getStrengthLabel = () => {
        if (strength === 0) return ""
        if (strength < 50) return "Weak"
        if (strength < 75) return "Medium"
        return "Strong"
    }

    if (!password) return null

    return (
        <div className="space-y-3">
            <div className="space-y-1">
                <div className="flex justify-between text-xs">
                    <span className="text-content-tertiary">Password strength</span>
                    <span className={cn(
                        "font-medium",
                        strength < 50 && "text-danger",
                        strength >= 50 && strength < 75 && "text-warning",
                        strength >= 75 && "text-success"
                    )}>
                        {getStrengthLabel()}
                    </span>
                </div>
                <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden">
                    <div
                        className={cn(
                            "h-full transition-all duration-300",
                            getStrengthColor()
                        )}
                        style={{ width: `${strength}%` }}
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                {requirements.map((req, index) => {
                    const isMet = req.test(password)
                    return (
                        <div key={index} className="flex items-center gap-2 text-xs">
                            <div className={cn(
                                "size-4 rounded-full flex items-center justify-center transition-colors",
                                isMet ? "bg-success text-white" : "bg-surface-secondary text-content-tertiary"
                            )}>
                                {isMet && <CheckIcon className="size-3" />}
                            </div>
                            <span className={cn(
                                "transition-colors",
                                isMet ? "text-content-primary" : "text-content-tertiary"
                            )}>
                                {req.label}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

/**
 * Auth Submit Button
 */
interface AuthSubmitProps extends React.ComponentPropsWithoutRef<"button"> {
    isLoading?: boolean
    loadingText?: string
}

export function AuthSubmit({
    isLoading,
    loadingText = "Please wait...",
    children,
    ...props
}: AuthSubmitProps) {
    return (
        <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2Icon className="size-4 animate-spin" />
                    {loadingText}
                </>
            ) : (
                children
            )}
        </Button>
    )
}

/**
 * Auth Divider - "Or continue with" separator
 */
interface AuthDividerProps {
    text?: string
}

export function AuthDivider({ text = "Or continue with" }: AuthDividerProps) {
    return (
        <div className="relative flex items-center py-2">
            <div className="flex-1">
                <Separator />
            </div>
            <span className="px-4 text-xs font-medium text-content-tertiary uppercase tracking-wide">
                {text}
            </span>
            <div className="flex-1">
                <Separator />
            </div>
        </div>
    )
}

/**
 * Social Auth Buttons
 */
interface SocialAuthProps {
    onGoogleClick?: () => void
    onGithubClick?: () => void
    isLoading?: boolean
}

export function SocialAuth({
    onGoogleClick,
    onGithubClick,
    isLoading
}: SocialAuthProps) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {onGoogleClick && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={onGoogleClick}
                    disabled={isLoading}
                >
                    <svg className="size-4" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Google
                </Button>
            )}

            {onGithubClick && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={onGithubClick}
                    disabled={isLoading}
                >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </Button>
            )}
        </div>
    )
}

/**
 * Auth Footer - Links to other pages
 */
interface AuthFooterProps {
    text: string
    linkText: string
    linkHref: string
}

export function AuthFooter({ text, linkText, linkHref }: AuthFooterProps) {
    return (
        <p className="text-center text-sm text-content-secondary">
            {text}{" "}
            <a
                href={linkHref}
                className="font-medium text-interactive hover:text-interactive-hover underline underline-offset-2 transition-colors"
            >
                {linkText}
            </a>
        </p>
    )
}

/**
 * Auth Alert - For errors and success messages
 */
interface AuthAlertProps {
    variant?: "default" | "danger" | "success"
    title?: string
    message: string
}

export function AuthAlert({ variant = "danger", title, message }: AuthAlertProps) {
    return (
        <Alert variant={variant}>
            <Alert.Content>
                {title && <Alert.Title>{title}</Alert.Title>}
                <Alert.Description>{message}</Alert.Description>
            </Alert.Content>
        </Alert>
    )
}

/**
 * Remember Me Checkbox
 */
interface RememberMeProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
}

export function RememberMe({ checked, onCheckedChange }: RememberMeProps) {
    return (
        <div className="flex items-center gap-2">
            <Checkbox
                id="remember"
                checked={checked}
                onCheckedChange={onCheckedChange}
            />
            <Label
                htmlFor="remember"
                className="text-sm text-content-secondary cursor-pointer"
            >
                Remember me
            </Label>
        </div>
    )
}