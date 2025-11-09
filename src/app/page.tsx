/**
 * Components Showcase Page
 * Path: src/app/showcase/page.tsx
 * 
 * Comprehensive showcase of all 40+ UI components
 */

"use client"

import { useState } from "react"
import {
    CheckCircle2Icon,
    InfoIcon,
    AlertTriangleIcon,
    XCircleIcon,
    HomeIcon,
    SettingsIcon,
    UserIcon,
    BellIcon,
    SearchIcon,
    PlusIcon,
    TrashIcon,
    EditIcon,
    DownloadIcon,
} from "lucide-react"

// Import all components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Alert } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Tabs } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Pagination } from "@/components/ui/pagination"
import { Accordion } from "@/components/ui/accordion"
import { Collapsible } from "@/components/ui/collapsible"
import { Dialog } from "@/components/ui/dialog"
import { Sheet } from "@/components/ui/sheet"
import { Popover } from "@/components/ui/popover"
import { Tooltip } from "@/components/ui/tooltip"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"
import { Empty } from "@/components/ui/empty"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ShowcasePage() {
    const [progress, setProgress] = useState(60)
    const [switchChecked, setSwitchChecked] = useState(false)

    return (
        <div className="min-h-screen bg-canvas">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b-2 border-border-default bg-surface/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight text-content-primary">
                                UI Components Showcase
                            </h1>
                            <p className="text-sm text-content-secondary">
                                40+ production-ready components with Apple Design System
                            </p>
                        </div>
                        <Badge variant="primary">v1.0.0</Badge>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="space-y-16">

                    {/* Buttons Section */}
                    <Section
                        id="buttons"
                        title="Buttons"
                        description="Various button styles and states"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Variants">
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="danger">Danger</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Sizes">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Button size="sm">Small</Button>
                                    <Button size="md">Medium</Button>
                                    <Button size="lg">Large</Button>
                                    <Button size="xl">Extra Large</Button>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="With Icons">
                                <div className="flex flex-wrap gap-3">
                                    <Button>
                                        <PlusIcon />
                                        Add Item
                                    </Button>
                                    <Button variant="outline">
                                        <SearchIcon />
                                        Search
                                    </Button>
                                    <Button variant="danger">
                                        <TrashIcon />
                                        Delete
                                    </Button>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Icon Only">
                                <div className="flex flex-wrap gap-3">
                                    <Button size="icon-sm" variant="ghost">
                                        <EditIcon />
                                    </Button>
                                    <Button size="icon-md" variant="outline">
                                        <SettingsIcon />
                                    </Button>
                                    <Button size="icon-lg" variant="primary">
                                        <DownloadIcon />
                                    </Button>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="States">
                                <div className="flex flex-wrap gap-3">
                                    <Button loading>Loading</Button>
                                    <Button disabled>Disabled</Button>
                                </div>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Form Inputs Section */}
                    <Section
                        id="inputs"
                        title="Form Inputs"
                        description="Text inputs, textareas, and form controls"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Input States">
                                <div className="space-y-3 max-w-md">
                                    <div>
                                        <Label>Default Input</Label>
                                        <Input placeholder="Enter text..." />
                                    </div>
                                    <div>
                                        <Label>With Error</Label>
                                        <Input placeholder="Invalid input" error />
                                    </div>
                                    <div>
                                        <Label>With Success</Label>
                                        <Input placeholder="Valid input" success />
                                    </div>
                                    <div>
                                        <Label>Disabled</Label>
                                        <Input placeholder="Disabled" disabled />
                                    </div>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Textarea">
                                <div className="max-w-md">
                                    <Label>Message</Label>
                                    <Textarea placeholder="Type your message here..." rows={4} />
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Select">
                                <div className="max-w-md">
                                    <Label>Choose an option</Label>
                                    <Select>
                                        <Select.Trigger>
                                            <Select.Value placeholder="Select..." />
                                        </Select.Trigger>
                                        <Select.Content>
                                            <Select.Item value="option1">Option 1</Select.Item>
                                            <Select.Item value="option2">Option 2</Select.Item>
                                            <Select.Item value="option3">Option 3</Select.Item>
                                        </Select.Content>
                                    </Select>
                                </div>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Selection Controls */}
                    <Section
                        id="selection"
                        title="Selection Controls"
                        description="Checkboxes, radios, switches, and toggles"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Checkbox">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="check1" />
                                        <Label htmlFor="check1">Accept terms and conditions</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="check2" defaultChecked />
                                        <Label htmlFor="check2">Subscribe to newsletter</Label>
                                    </div>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Radio Group">
                                <RadioGroup defaultValue="option1">
                                    <div className="flex items-center gap-2">
                                        <RadioGroup.Item value="option1" id="r1" />
                                        <Label htmlFor="r1">Option 1</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroup.Item value="option2" id="r2" />
                                        <Label htmlFor="r2">Option 2</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroup.Item value="option3" id="r3" />
                                        <Label htmlFor="r3">Option 3</Label>
                                    </div>
                                </RadioGroup>
                            </ComponentDemo>

                            <ComponentDemo title="Switch">
                                <div className="flex items-center gap-2">
                                    <Switch
                                        checked={switchChecked}
                                        onCheckedChange={setSwitchChecked}
                                        id="switch1"
                                    />
                                    <Label htmlFor="switch1">Enable notifications</Label>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Toggle">
                                <div className="flex gap-2">
                                    <Toggle>
                                        <BellIcon />
                                    </Toggle>
                                    <Toggle variant="outline">
                                        <UserIcon />
                                    </Toggle>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Toggle Group">
                                <ToggleGroup type="single" defaultValue="left">
                                    <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
                                    <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
                                    <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
                                </ToggleGroup>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Cards & Containers */}
                    <Section
                        id="cards"
                        title="Cards & Containers"
                        description="Card components with various styles"
                    >
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <Card.Header>
                                    <Card.Title>Default Card</Card.Title>
                                    <Card.Description>
                                        A simple card with header and content
                                    </Card.Description>
                                </Card.Header>
                                <Card.Content>
                                    This is the card content area.
                                </Card.Content>
                            </Card>

                            <Card glass elevated>
                                <Card.Header>
                                    <Card.Title>Glass Effect</Card.Title>
                                    <Card.Description>
                                        Card with glassmorphism effect
                                    </Card.Description>
                                </Card.Header>
                                <Card.Content>
                                    Backdrop blur and transparency.
                                </Card.Content>
                            </Card>

                            <Card interactive>
                                <Card.Header>
                                    <Card.Title>Interactive Card</Card.Title>
                                    <Card.Description>
                                        Hover to see the effect
                                    </Card.Description>
                                </Card.Header>
                                <Card.Content>
                                    This card has hover animations.
                                </Card.Content>
                            </Card>
                        </div>
                    </Section>

                    {/* Feedback Components */}
                    <Section
                        id="feedback"
                        title="Feedback"
                        description="Alerts, progress bars, and loading states"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Alerts">
                                <div className="space-y-3">
                                    <Alert variant="default">
                                        <Alert.Icon><InfoIcon /></Alert.Icon>
                                        <Alert.Content>
                                            <Alert.Title>Information</Alert.Title>
                                            <Alert.Description>
                                                This is an informational alert message.
                                            </Alert.Description>
                                        </Alert.Content>
                                    </Alert>

                                    <Alert variant="success">
                                        <Alert.Icon><CheckCircle2Icon /></Alert.Icon>
                                        <Alert.Content>
                                            <Alert.Title>Success</Alert.Title>
                                            <Alert.Description>
                                                Your changes have been saved successfully.
                                            </Alert.Description>
                                        </Alert.Content>
                                    </Alert>

                                    <Alert variant="warning">
                                        <Alert.Icon><AlertTriangleIcon /></Alert.Icon>
                                        <Alert.Content>
                                            <Alert.Title>Warning</Alert.Title>
                                            <Alert.Description>
                                                Please review your input before continuing.
                                            </Alert.Description>
                                        </Alert.Content>
                                    </Alert>

                                    <Alert variant="danger">
                                        <Alert.Icon><XCircleIcon /></Alert.Icon>
                                        <Alert.Content>
                                            <Alert.Title>Error</Alert.Title>
                                            <Alert.Description>
                                                An error occurred. Please try again.
                                            </Alert.Description>
                                        </Alert.Content>
                                    </Alert>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Progress">
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-content-secondary">Progress</span>
                                            <span className="text-content-primary">{progress}%</span>
                                        </div>
                                        <Progress value={progress} showValue />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setProgress(Math.max(0, progress - 10))}
                                        >
                                            Decrease
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setProgress(Math.min(100, progress + 10))}
                                        >
                                            Increase
                                        </Button>
                                    </div>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Spinner">
                                <div className="flex gap-4 items-center">
                                    <Spinner size="sm" />
                                    <Spinner size="md" />
                                    <Spinner size="lg" />
                                    <Spinner size="xl" />
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Skeleton">
                                <div className="space-y-3">
                                    <Skeleton.Card />
                                    <Skeleton.Text lines={3} />
                                </div>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Badges & Avatars */}
                    <Section
                        id="display"
                        title="Data Display"
                        description="Badges, avatars, and status indicators"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Badges">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="default">Default</Badge>
                                    <Badge variant="primary">Primary</Badge>
                                    <Badge variant="success">Success</Badge>
                                    <Badge variant="warning">Warning</Badge>
                                    <Badge variant="danger">Danger</Badge>
                                    <Badge variant="outline">Outline</Badge>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Avatars">
                                <div className="flex gap-4 items-center">
                                    <Avatar size="sm">
                                        <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                    <Avatar size="md">
                                        <Avatar.Fallback>AB</Avatar.Fallback>
                                        <Avatar.Status variant="online" />
                                    </Avatar>
                                    <Avatar size="lg">
                                        <Avatar.Fallback>CD</Avatar.Fallback>
                                        <Avatar.Status variant="away" />
                                    </Avatar>
                                    <Avatar size="xl">
                                        <Avatar.Fallback>EF</Avatar.Fallback>
                                        <Avatar.Status variant="busy" />
                                    </Avatar>
                                </div>
                            </ComponentDemo>

                            <ComponentDemo title="Empty State">
                                <Empty>
                                    <Empty.Media variant="icon">
                                        <SearchIcon />
                                    </Empty.Media>
                                    <Empty.Header>
                                        <Empty.Title>No results found</Empty.Title>
                                        <Empty.Description>
                                            Try adjusting your search to find what you're looking for.
                                        </Empty.Description>
                                    </Empty.Header>
                                </Empty>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Navigation */}
                    <Section
                        id="navigation"
                        title="Navigation"
                        description="Tabs, breadcrumbs, and pagination"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Tabs">
                                <Tabs defaultValue="tab1">
                                    <Tabs.List>
                                        <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
                                        <Tabs.Trigger value="tab2">Details</Tabs.Trigger>
                                        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
                                    </Tabs.List>
                                    <Tabs.Content value="tab1">
                                        <p className="text-sm text-content-secondary py-4">
                                            Overview tab content
                                        </p>
                                    </Tabs.Content>
                                    <Tabs.Content value="tab2">
                                        <p className="text-sm text-content-secondary py-4">
                                            Details tab content
                                        </p>
                                    </Tabs.Content>
                                    <Tabs.Content value="tab3">
                                        <p className="text-sm text-content-secondary py-4">
                                            Settings tab content
                                        </p>
                                    </Tabs.Content>
                                </Tabs>
                            </ComponentDemo>

                            <ComponentDemo title="Breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.List>
                                        <Breadcrumb.Item>
                                            <Breadcrumb.Link href="/">
                                                <HomeIcon />
                                                Home
                                            </Breadcrumb.Link>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Separator />
                                        <Breadcrumb.Item>
                                            <Breadcrumb.Link href="/components">
                                                Components
                                            </Breadcrumb.Link>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Separator />
                                        <Breadcrumb.Item>
                                            <Breadcrumb.Page>Showcase</Breadcrumb.Page>
                                        </Breadcrumb.Item>
                                    </Breadcrumb.List>
                                </Breadcrumb>
                            </ComponentDemo>

                            <ComponentDemo title="Pagination">
                                <Pagination>
                                    <Pagination.Content>
                                        <Pagination.Item>
                                            <Pagination.Previous href="#" />
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Link href="#" isActive>1</Pagination.Link>
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Link href="#">2</Pagination.Link>
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Link href="#">3</Pagination.Link>
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Ellipsis />
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Link href="#">10</Pagination.Link>
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Next href="#" />
                                        </Pagination.Item>
                                    </Pagination.Content>
                                </Pagination>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Collapsible Content */}
                    <Section
                        id="collapsible"
                        title="Collapsible"
                        description="Accordion and collapsible components"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Accordion">
                                <Accordion type="single" collapsible>
                                    <Accordion.Item value="item1">
                                        <Accordion.Trigger>What is this component?</Accordion.Trigger>
                                        <Accordion.Content>
                                            This is an accordion component that allows you to show and hide content.
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item2">
                                        <Accordion.Trigger>How do I use it?</Accordion.Trigger>
                                        <Accordion.Content>
                                            Simply wrap your content in Accordion.Item components with triggers.
                                        </Accordion.Content>
                                    </Accordion.Item>
                                    <Accordion.Item value="item3">
                                        <Accordion.Trigger>Can I customize it?</Accordion.Trigger>
                                        <Accordion.Content>
                                            Yes! The component is fully customizable with Tailwind classes.
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion>
                            </ComponentDemo>

                            <ComponentDemo title="Collapsible">
                                <Collapsible>
                                    <Collapsible.Trigger className="flex items-center gap-2 w-full p-3 rounded-xl hover:bg-surface-secondary">
                                        <span className="font-medium">Click to expand</span>
                                    </Collapsible.Trigger>
                                    <Collapsible.Content className="p-3">
                                        <p className="text-sm text-content-secondary">
                                            This is collapsible content that can be shown or hidden.
                                        </p>
                                    </Collapsible.Content>
                                </Collapsible>
                            </ComponentDemo>
                        </div>
                    </Section>

                    {/* Dialogs */}
                    <Section
                        id="dialogs"
                        title="Overlays"
                        description="Dialogs, sheets, and popovers"
                    >
                        <div className="space-y-4">
                            <ComponentDemo title="Dialog">
                                <Dialog>
                                    <Dialog.Trigger asChild>
                                        <Button>Open Dialog</Button>
                                    </Dialog.Trigger>
                                    <Dialog.Content>
                                        <Dialog.Header>
                                            <Dialog.Title>Dialog Title</Dialog.Title>
                                            <Dialog.Description>
                                                This is a dialog description explaining what the dialog is for.
                                            </Dialog.Description>
                                        </Dialog.Header>
                                        <div className="py-4">
                                            <p className="text-sm text-content-secondary">
                                                Dialog content goes here.
                                            </p>
                                        </div>
                                        <Dialog.Footer>
                                            <Dialog.Close asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </Dialog.Close>
                                            <Button variant="primary">Confirm</Button>
                                        </Dialog.Footer>
                                    </Dialog.Content>
                                </Dialog>
                            </ComponentDemo>

                            <ComponentDemo title="Alert Dialog">
                                <AlertDialog>
                                    <AlertDialog.Trigger asChild>
                                        <Button variant="danger">Delete</Button>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content>
                                        <AlertDialog.Header>
                                            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                                            <AlertDialog.Description>
                                                This action cannot be undone. This will permanently delete the item.
                                            </AlertDialog.Description>
                                        </AlertDialog.Header>
                                        <AlertDialog.Footer>
                                            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                                            <AlertDialog.Action>Delete</AlertDialog.Action>
                                        </AlertDialog.Footer>
                                    </AlertDialog.Content>
                                </AlertDialog>
                            </ComponentDemo>

                            <ComponentDemo title="Sheet">
                                <Sheet>
                                    <Sheet.Trigger asChild>
                                        <Button variant="outline">Open Sheet</Button>
                                    </Sheet.Trigger>
                                    <Sheet.Content>
                                        <Sheet.Header>
                                            <Sheet.Title>Sheet Title</Sheet.Title>
                                            <Sheet.Description>
                                                This is a slide-over panel from the right side.
                                            </Sheet.Description>
                                        </Sheet.Header>
                                        <div className="py-4">
                                            <p className="text-sm text-content-secondary">
                                                Sheet content goes here.
                                            </p>
                                        </div>
                                    </Sheet.Content>
                                </Sheet>
                            </ComponentDemo>

                            <ComponentDemo title="Dropdown Menu">
                                <DropdownMenu>
                                    <DropdownMenu.Trigger asChild>
                                        <Button variant="outline">Open Menu</Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content>
                                        <DropdownMenu.Label>My Account</DropdownMenu.Label>
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item>
                                            <UserIcon />
                                            Profile
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item>
                                            <SettingsIcon />
                                            Settings
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item variant="danger">
                                            <TrashIcon />
                                            Delete
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu>
                            </ComponentDemo>

                            <ComponentDemo title="Popover">
                                <Popover>
                                    <Popover.Trigger asChild>
                                        <Button variant="outline">Open Popover</Button>
                                    </Popover.Trigger>
                                    <Popover.Content>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Popover Title</h4>
                                            <p className="text-sm text-content-secondary">
                                                This is a popover with some content.
                                            </p>
                                        </div>
                                    </Popover.Content>
                                </Popover>
                            </ComponentDemo>

                            <ComponentDemo title="Tooltip">
                                <Tooltip>
                                    <Tooltip.Trigger asChild>
                                        <Button variant="outline">Hover me</Button>
                                    </Tooltip.Trigger>
                                    <Tooltip.Content>
                                        This is a tooltip
                                    </Tooltip.Content>
                                </Tooltip>
                            </ComponentDemo>
                        </div>
                    </Section>

                </div>
            </main>

            {/* Footer */}
            <footer className="border-t-2 border-border-default bg-surface mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-content-secondary">
                        <p>Built with Apple Design System principles</p>
                        <p className="mt-1">40+ production-ready components</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

/**
 * Section Component
 */
interface SectionProps {
    id: string
    title: string
    description: string
    children: React.ReactNode
}

function Section({ id, title, description, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-20">
            <div className="mb-6 space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
                    {title}
                </h2>
                <p className="text-content-secondary">
                    {description}
                </p>
                <Separator />
            </div>
            {children}
        </section>
    )
}

/**
 * Component Demo Wrapper
 */
interface ComponentDemoProps {
    title: string
    children: React.ReactNode
}

function ComponentDemo({ title, children }: ComponentDemoProps) {
    return (
        <div className="rounded-xl border-2 border-border-default bg-surface p-6">
            <h3 className="text-sm font-medium text-content-secondary mb-4">
                {title}
            </h3>
            {children}
        </div>
    )
}