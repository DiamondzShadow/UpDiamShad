"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, Code } from "lucide-react"

interface CopyButtonProps {
  text: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm"
  className?: string
  fullWidth?: boolean
  icon?: boolean
  codeIcon?: boolean
  label?: string
  successLabel?: string
}

export default function CopyButton({
  text,
  variant = "ghost",
  size = "sm",
  className = "",
  fullWidth = false,
  icon = true,
  codeIcon = false,
  label = "Copy Address",
  successLabel = "Copied!",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Button variant={variant} size={size} className={`${className} ${fullWidth ? "w-full" : ""}`} onClick={handleCopy}>
      {icon && (
        <>
          {copied ? (
            <Check className={`${codeIcon ? "w-3 h-3" : "w-4 h-4"} mr-2`} />
          ) : (
            <>{codeIcon ? <Code className="w-3 h-3 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}</>
          )}
        </>
      )}
      {copied ? successLabel : label}
    </Button>
  )
}
