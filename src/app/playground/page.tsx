"use client"

import { useState } from "react"
import { PillButton } from "@/components/pill-button"
import { Input } from "@/components/input"
import { Select } from "@/components/select"
import { Checkbox } from "@/components/checkbox"
import { TextArea } from "@/components/text-area"
import { Reveal } from "@/components/reveal"
import { ProductCard } from "@/components/product-card"
import { Modal } from "@/components/modal"
import { Tabs } from "@/components/tabs"
import { Dropdown } from "@/components/dropdown"
import { Accordion } from "@/components/accordion"
import { useToast } from "@/components/toast"
import { PRODUCTS } from "@/lib/products"

type ComponentKey =
  | "pill-button"
  | "input"
  | "select"
  | "checkbox"
  | "text-area"
  | "product-card"
  | "reveal"
  | "modal"
  | "tabs"
  | "dropdown"
  | "accordion"
  | "toast"

interface ComponentMeta {
  key: ComponentKey
  name: string
  category: string
  description: string
}

const COMPONENTS: ComponentMeta[] = [
  { key: "pill-button", name: "PillButton", category: "Buttons", description: "Primary call-to-action with filled or outlined variant" },
  { key: "input", name: "Input", category: "Forms", description: "Text input with label, error state, and focus ring" },
  { key: "select", name: "Select", category: "Forms", description: "Dropdown select with custom chevron and error state" },
  { key: "checkbox", name: "Checkbox", category: "Forms", description: "Custom checkbox with label and error state" },
  { key: "text-area", name: "TextArea", category: "Forms", description: "Multi-line text input with label and error state" },
  { key: "product-card", name: "ProductCard", category: "Cards", description: "Product display card with image, name, and price" },
  { key: "modal", name: "Modal", category: "Overlays", description: "Dialog with backdrop, focus trap, and keyboard dismiss" },
  { key: "dropdown", name: "Dropdown", category: "Overlays", description: "Menu dropdown with items, icons, and keyboard nav" },
  { key: "accordion", name: "Accordion", category: "Layout", description: "Expandable sections with animated height transition" },
  { key: "tabs", name: "Tabs", category: "Layout", description: "Tabbed content switcher with animated active indicator" },
  { key: "toast", name: "Toast", category: "Feedback", description: "Notification system with success, error, and info types" },
  { key: "reveal", name: "Reveal", category: "Animations", description: "Scroll-triggered fade-in animation wrapper" },
]

const CATEGORIES = [...new Set(COMPONENTS.map((c) => c.category))]

function getCodeSnippet(key: ComponentKey, state: Record<string, unknown>): string {
  const s = state as Record<string, string | boolean | number>
  switch (key) {
    case "pill-button":
      return `<PillButton variant="${s.variant}"${s.asLink ? ' href="/"' : ""}>
  ${s.text}
</PillButton>`
    case "input":
      return `<Input
  label="${String(s.label || "Email")}"
  placeholder="${String(s.placeholder || "you@example.com")}"
  ${s.showError ? 'error="Please enter a valid email"' : ""}
  ${s.disabled ? "disabled" : ""}
/>`
    case "select":
      return `<Select
  label="${String(s.label || "Country")}"
  options={options}
  placeholder="Select a country"
  ${s.showError ? 'error="Please select a country"' : ""}
/>`
    case "checkbox":
      return `<Checkbox
  label="${String(s.label || "I agree to the terms")}"
  ${s.showError ? 'error="You must agree to continue"' : ""}
/>`
    case "text-area":
      return `<TextArea
  label="${String(s.label || "Message")}"
  placeholder="${String(s.placeholder || "Type your message...")}"
  rows={4}
  ${s.showError ? 'error="Message is required"' : ""}
/>`
    case "product-card":
      return `<ProductCard product={product} />`
    case "reveal":
      return `<Reveal delay={${s.delay}}>
  <div>Content</div>
</Reveal>`
    case "modal":
      return `<Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
  <p>Modal content here</p>
</Modal>`
    case "tabs":
      return `<Tabs tabs={tabs} />`
    case "dropdown":
      return `<Dropdown trigger={<button>Menu</button>} items={items} onSelect={handler} />`
    case "accordion":
      return `<Accordion items={items} />`
    case "toast":
      return 'addToast("Item saved!", "success")'
  }
}

export default function PlaygroundPage() {
  const [activeKey, setActiveKey] = useState<ComponentKey>("pill-button")

  // Stored here so code snippet can access them
  const [pbVariant, setPbVariant] = useState<"filled" | "outlined">("filled")
  const [pbText, setPbText] = useState("Learn more")
  const [pbAsLink, setPbAsLink] = useState(false)

  const [inLabel, setInLabel] = useState("Email")
  const [inPlaceholder, setInPlaceholder] = useState("you@example.com")
  const [inError, setInError] = useState(false)
  const [inDisabled, setInDisabled] = useState(false)

  const [selLabel, setSelLabel] = useState("Country")
  const [selError, setSelError] = useState(false)

  const [cbLabel, setCbLabel] = useState("I agree to the terms")
  const [cbError, setCbError] = useState(false)

  const [taLabel, setTaLabel] = useState("Message")
  const [taPlaceholder, setTaPlaceholder] = useState("Type your message...")
  const [taError, setTaError] = useState(false)

  const [pcColor, setPcColor] = useState(true)

  const [revDuration, setRevDuration] = useState("0.1")
  const [modalOpen, setModalOpen] = useState(false)
  const { addToast } = useToast()

  const active = COMPONENTS.find((c) => c.key === activeKey)!

  function renderPlayground() {
    switch (activeKey) {
      case "pill-button":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <label className="font-sf-pro-text text-[14px] font-semibold text-graphite">Variant</label>
                <Select
                  options={[
                    { value: "filled", label: "Filled" },
                    { value: "outlined", label: "Outlined" },
                  ]}
                  value={pbVariant}
                  onChange={(e) => setPbVariant(e.target.value as "filled" | "outlined")}
                />
              </div>
              <Input label="Text" value={pbText} onChange={(e) => setPbText(e.target.value)} className="w-[160px]" />
              <Checkbox label="Render as link" checked={pbAsLink} onChange={(e) => setPbAsLink(e.target.checked)} />
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-bone bg-paper p-8">
              <PillButton variant={pbVariant} href={pbAsLink ? "#" : undefined}>{pbText}</PillButton>
            </div>
          </div>
        )
      case "input":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Input label="Label" value={inLabel} onChange={(e) => setInLabel(e.target.value)} className="w-[160px]" />
              <Input label="Placeholder" value={inPlaceholder} onChange={(e) => setInPlaceholder(e.target.value)} className="w-[200px]" />
              <Checkbox label="Show error" checked={inError} onChange={(e) => setInError(e.target.checked)} />
              <Checkbox label="Disabled" checked={inDisabled} onChange={(e) => setInDisabled(e.target.checked)} />
            </div>
            <div className="max-w-[360px] rounded-lg border border-bone bg-paper p-8">
              <Input label={inLabel || undefined} placeholder={inPlaceholder} error={inError ? "Please enter a valid email" : undefined} disabled={inDisabled} />
            </div>
          </div>
        )
      case "select":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Input label="Label" value={selLabel} onChange={(e) => setSelLabel(e.target.value)} className="w-[160px]" />
              <Checkbox label="Show error" checked={selError} onChange={(e) => setSelError(e.target.checked)} />
            </div>
            <div className="max-w-[360px] rounded-lg border border-bone bg-paper p-8">
              <Select label={selLabel || undefined} options={[{ value: "us", label: "United States" }, { value: "sg", label: "Singapore" }, { value: "id", label: "Indonesia" }]} placeholder="Select a country" error={selError ? "Please select a country" : undefined} />
            </div>
          </div>
        )
      case "checkbox":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Input label="Label" value={cbLabel} onChange={(e) => setCbLabel(e.target.value)} className="w-[220px]" />
              <Checkbox label="Show error" checked={cbError} onChange={(e) => setCbError(e.target.checked)} />
            </div>
            <div className="max-w-[400px] rounded-lg border border-bone bg-paper p-8">
              <Checkbox label={cbLabel} error={cbError ? "You must agree to continue" : undefined} />
            </div>
          </div>
        )
      case "text-area":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Input label="Label" value={taLabel} onChange={(e) => setTaLabel(e.target.value)} className="w-[160px]" />
              <Input label="Placeholder" value={taPlaceholder} onChange={(e) => setTaPlaceholder(e.target.value)} className="w-[200px]" />
              <Checkbox label="Show error" checked={taError} onChange={(e) => setTaError(e.target.checked)} />
            </div>
            <div className="max-w-[400px] rounded-lg border border-bone bg-paper p-8">
              <TextArea label={taLabel || undefined} placeholder={taPlaceholder} error={taError ? "Message is required" : undefined} rows={4} />
            </div>
          </div>
        )
      case "product-card":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Checkbox label="Show color indicator" checked={pcColor} onChange={(e) => setPcColor(e.target.checked)} />
            </div>
            <div className="max-w-[280px] rounded-lg border border-bone bg-paper p-4">
              <ProductCard product={{ ...PRODUCTS[0], color: pcColor ? PRODUCTS[0].color : undefined }} />
            </div>
          </div>
        )
      case "reveal":
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <Input label="Delay (s)" value={revDuration} onChange={(e) => setRevDuration(e.target.value)} className="w-[100px]" />
            </div>
            <div className="flex items-center justify-center rounded-lg border border-bone bg-paper p-12">
              <Reveal delay={Number(revDuration) || 0}>
                <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-apple-blue text-paper font-sf-pro-text text-[17px] font-semibold">
                  Scroll to reveal
                </div>
              </Reveal>
              <div className="ml-4 h-[400px] w-[1px] bg-bone" aria-hidden="true" />
            </div>
          </div>
        )
      case "modal":
        return (
          <div className="space-y-8">
            <PillButton onClick={() => setModalOpen(true)}>Open Modal</PillButton>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Modal Title">
              <p className="font-sf-pro-text text-[15px] leading-[1.57] text-fog">
                This is a modal dialog with focus trap, keyboard dismiss (Escape), and backdrop blur.
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <PillButton variant="outlined" onClick={() => setModalOpen(false)}>Cancel</PillButton>
                <PillButton onClick={() => setModalOpen(false)}>Confirm</PillButton>
              </div>
            </Modal>
          </div>
        )
      case "tabs":
        return (
          <div className="max-w-[600px] rounded-lg border border-bone bg-paper p-6">
            <Tabs
              tabs={[
                { id: "design", label: "Design", content: <div className="p-4 font-sf-pro-text text-[15px] text-fog">Design content with typography, color, and layout guidelines.</div> },
                { id: "code", label: "Code", content: <div className="p-4 font-sf-pro-text text-[15px] text-fog">Code examples and implementation details for developers.</div> },
                { id: "accessibility", label: "Accessibility", content: <div className="p-4 font-sf-pro-text text-[15px] text-fog">ARIA roles, keyboard navigation, and screen reader support.</div> },
              ]}
            />
          </div>
        )
      case "dropdown":
        return (
          <div className="flex items-start rounded-lg border border-bone bg-paper p-8">
            <Dropdown
              label="Actions"
              trigger={
                <div className="flex items-center gap-2 rounded-md bg-cloud px-4 py-2.5 font-sf-pro-text text-[14px] font-semibold text-graphite transition-colors hover:bg-bone">
                  Actions
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
                </div>
              }
              items={[
                { label: "Edit", value: "edit", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 1.5L12.5 4L4.5 12L1 13L2 9.5L10 1.5Z" /></svg> },
                { label: "Duplicate", value: "duplicate", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="4" y="4" width="9" height="9" rx="1.5" /><path d="M10 4V2.5A1.5 1.5 0 0 0 8.5 1H2.5A1.5 1.5 0 0 0 1 2.5V8.5A1.5 1.5 0 0 0 2.5 10H4" /></svg> },
                { label: "Delete", value: "delete", danger: true, icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4H12M5 4V2.5C5 1.5 5.5 1 6.5 1H7.5C8.5 1 9 1.5 9 2.5V4M11 4V11.5C11 12.5 10.5 13 9.5 13H4.5C3.5 13 3 12.5 3 11.5V4" /></svg> },
              ]}
              onSelect={(_v) => {}}
            />
          </div>
        )
      case "accordion":
        return (
          <div className="max-w-[600px]">
            <Accordion
              items={[
                { id: "what", title: "What is this design system?", content: "A premium design system reference implementation inspired by Apple's design language, built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion." },
                { id: "why", title: "Why use it?", content: "It provides a consistent, accessible, and performant foundation for building modern web applications with Apple-inspired aesthetics." },
                { id: "how", title: "How do I customize it?", content: "All design tokens are defined as CSS custom properties in globals.css. Colors, typography, spacing, and shadows can be overridden by modifying the @theme block." },
              ]}
            />
          </div>
        )
      case "toast":
        return (
          <div className="space-y-6">
            <p className="font-sf-pro-text text-[15px] leading-[1.57] text-fog">
              Click a button to trigger a toast notification.
            </p>
            <div className="flex flex-wrap gap-4">
              <PillButton onClick={() => addToast("Item saved successfully!", "success")}>Success Toast</PillButton>
              <PillButton variant="outlined" onClick={() => addToast("Something went wrong.", "error")}>Error Toast</PillButton>
              <PillButton variant="outlined" onClick={() => addToast("You have 3 new messages.", "info")}>Info Toast</PillButton>
            </div>
          </div>
        )
    }
  }

  function getCode() {
    const state: Record<string, unknown> = {}
    switch (activeKey) {
      case "pill-button":
        state.variant = pbVariant; state.text = pbText; state.asLink = pbAsLink; break
      case "input":
        state.label = inLabel; state.placeholder = inPlaceholder; state.showError = inError; state.disabled = inDisabled; break
      case "select":
        state.label = selLabel; state.showError = selError; break
      case "checkbox":
        state.label = cbLabel; state.showError = cbError; break
      case "text-area":
        state.label = taLabel; state.placeholder = taPlaceholder; state.showError = taError; break
      case "reveal":
        state.delay = revDuration; break
      case "modal":
      case "tabs":
      case "dropdown":
      case "accordion":
      case "toast":
        break
    }
    return getCodeSnippet(activeKey, state)
  }

  return (
    <div className="flex min-h-[100dvh] bg-cloud">
      <aside className="hidden w-64 shrink-0 border-r border-bone bg-paper md:block">
        <div className="p-4">
          <h2 className="font-sf-pro-display text-[24px] font-semibold leading-[1.18] tracking-[-0.28px] text-graphite">
            Components
          </h2>
          <p className="mt-1 font-sf-pro-text text-[12px] leading-[1.33] text-fog">
            {COMPONENTS.length} components
          </p>
        </div>
        <nav className="space-y-1 px-3 pb-4" aria-label="Component list">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h3 className="px-3 pt-4 pb-1 font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
                {cat}
              </h3>
              {COMPONENTS.filter((c) => c.category === cat).map((comp) => (
                <button
                  key={comp.key}
                  type="button"
                  onClick={() => setActiveKey(comp.key)}
                  className={`w-full rounded-md px-3 py-2 text-left font-sf-pro-text text-[14px] leading-[1.43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
                    activeKey === comp.key
                      ? "bg-cloud font-semibold text-graphite"
                      : "text-fog hover:bg-cloud/50 hover:text-graphite"
                  }`}
                >
                  {comp.name}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="border-b border-bone bg-paper px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
                {active.name}
              </h1>
              <p className="font-sf-pro-text text-[14px] leading-[1.43] text-fog">
                {active.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {["md", "sm", "xs"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="rounded-md bg-cloud px-3 py-1.5 font-sf-pro-text text-[12px] font-semibold leading-[1.33] text-fog transition-colors hover:bg-bone"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="flex-1 overflow-auto p-6">
            {renderPlayground()}
          </div>

          <aside className="w-full border-t border-bone bg-paper lg:w-[400px] lg:border-t-0 lg:border-l">
            <div className="p-4">
              <h3 className="font-sf-pro-text text-[13px] font-semibold leading-[1.38] text-graphite">
                Code
              </h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-graphite p-4 font-['JetBrains_Mono',monospace] text-[13px] leading-[1.5] text-cloud">
                <code>{getCode()}</code>
              </pre>
              <button
                type="button"
                onClick={() => { navigator.clipboard.writeText(getCode()).catch(() => {}) }}
                className="mt-3 w-full rounded-md bg-cloud py-2 font-sf-pro-text text-[13px] font-semibold leading-[1.38] text-graphite transition-colors hover:bg-bone"
              >
                Copy code
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
