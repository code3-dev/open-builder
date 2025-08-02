"use client"

import { useMemo } from "react"
import type { Block } from "@/app/page"

interface EditableComponentProps {
  block: Block
  onClick: () => void
}

export function EditableComponent({ block, onClick }: EditableComponentProps) {
  const processedContent = useMemo(() => {
    let content = block.content
    const editableProps = block.editableProps

    // Helper function to convert camelCase to kebab-case
    const camelToKebab = (str: string) => {
      return str.replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    // Helper function to create CSS from styles object
    const createCSSString = (styles: Record<string, string>) => {
      return Object.entries(styles)
        .filter(([_, value]) => value && value !== "")
        .map(([key, value]) => {
          const cssKey = camelToKebab(key)

          // Handle special cases for CSS properties
          if (key === "paddingX") {
            return `padding-left: ${value}; padding-right: ${value}`
          }
          if (key === "paddingY") {
            return `padding-top: ${value}; padding-bottom: ${value}`
          }

          // Handle transform properties
          if (["rotate", "scale", "translateX", "translateY"].includes(key)) {
            return "" // Handle these separately in transform
          }

          // Handle filter properties
          if (["blur", "brightness", "contrast", "saturate"].includes(key)) {
            return "" // Handle these separately in filter
          }

          return `${cssKey}: ${value}`
        })
        .filter((rule) => rule !== "")
        .join("; ")
    }

    // Helper function to create transform string
    const createTransformString = (styles: Record<string, string>) => {
      const transforms = []
      if (styles.rotate) transforms.push(`rotate(${styles.rotate})`)
      if (styles.scale) transforms.push(`scale(${styles.scale})`)
      if (styles.translateX) transforms.push(`translateX(${styles.translateX})`)
      if (styles.translateY) transforms.push(`translateY(${styles.translateY})`)
      return transforms.length > 0 ? `transform: ${transforms.join(" ")}` : ""
    }

    // Helper function to create filter string
    const createFilterString = (styles: Record<string, string>) => {
      const filters = []
      if (styles.blur) filters.push(`blur(${styles.blur})`)
      if (styles.brightness) filters.push(`brightness(${styles.brightness})`)
      if (styles.contrast) filters.push(`contrast(${styles.contrast})`)
      if (styles.saturate) filters.push(`saturate(${styles.saturate})`)
      return filters.length > 0 ? `filter: ${filters.join(" ")}` : ""
    }

    // Apply text styles
    if (editableProps?.texts) {
      Object.entries(editableProps.texts).forEach(([textId, textData]) => {
        const regex = new RegExp(`(<[^>]*data-text-id="${textId}"[^>]*)(>)([^<]*)(</[^>]*>)`, "g")

        content = content.replace(regex, (match, openTag, closeBracket, currentText, closeTag) => {
          const styles = textData.styles || {}
          const content = textData.content || currentText

          // Create CSS string for text styles
          const cssRules = []

          // Add basic CSS rules
          const basicCSS = createCSSString(styles)
          if (basicCSS) cssRules.push(basicCSS)

          // Add transform if needed
          const transformCSS = createTransformString(styles)
          if (transformCSS) cssRules.push(transformCSS)

          // Add filter if needed
          const filterCSS = createFilterString(styles)
          if (filterCSS) cssRules.push(filterCSS)

          const styleString = cssRules.join("; ")

          // Add or update style attribute
          if (openTag.includes("style=")) {
            return openTag.replace(/style="([^"]*)"/, `style="$1; ${styleString}"`) + closeBracket + content + closeTag
          } else {
            return openTag + ` style="${styleString}"` + closeBracket + content + closeTag
          }
        })
      })
    }

    // Apply button styles
    if (editableProps?.buttons) {
      Object.entries(editableProps.buttons).forEach(([buttonId, buttonData]) => {
        const regex = new RegExp(`(<[^>]*data-button-id="${buttonId}"[^>]*)(>)([^<]*)(</[^>]*>)`, "g")

        content = content.replace(regex, (match, openTag, closeBracket, currentText, closeTag) => {
          const styles = buttonData.styles || {}
          const text = buttonData.text || currentText
          const link = buttonData.link || "#"

          // Create CSS string for button styles
          const cssRules = []

          // Handle padding specially for buttons
          const buttonStyles = { ...styles }
          if (styles.paddingX && styles.paddingY) {
            buttonStyles.padding = `${styles.paddingY} ${styles.paddingX}`
            delete buttonStyles.paddingX
            delete buttonStyles.paddingY
          }

          // Handle border
          if (styles.borderWidth && styles.borderStyle && styles.borderColor) {
            buttonStyles.border = `${styles.borderWidth} ${styles.borderStyle} ${styles.borderColor}`
            delete buttonStyles.borderWidth
            delete buttonStyles.borderStyle
            delete buttonStyles.borderColor
          }

          // Rename textColor to color for CSS
          if (buttonStyles.textColor) {
            buttonStyles.color = buttonStyles.textColor
            delete buttonStyles.textColor
          }

          const basicCSS = createCSSString(buttonStyles)
          if (basicCSS) cssRules.push(basicCSS)

          const transformCSS = createTransformString(styles)
          if (transformCSS) cssRules.push(transformCSS)

          const filterCSS = createFilterString(styles)
          if (filterCSS) cssRules.push(filterCSS)

          const styleString = cssRules.join("; ")

          // Update href attribute
          let updatedOpenTag = openTag
          if (updatedOpenTag.includes("href=")) {
            updatedOpenTag = updatedOpenTag.replace(/href="[^"]*"/, `href="${link}"`)
          } else {
            updatedOpenTag = updatedOpenTag.replace(/<(\w+)/, `<$1 href="${link}"`)
          }

          // Add or update style attribute
          if (updatedOpenTag.includes("style=")) {
            updatedOpenTag = updatedOpenTag.replace(/style="([^"]*)"/, `style="$1; ${styleString}"`)
          } else {
            updatedOpenTag = updatedOpenTag + ` style="${styleString}"`
          }

          return updatedOpenTag + closeBracket + text + closeTag
        })
      })
    }

    // Apply component-level styles
    if (editableProps?.styles) {
      const componentStyles = editableProps.styles
      const regex = /(<section[^>]*data-component="hero"[^>]*)(>)/g

      content = content.replace(regex, (match, openTag, closeBracket) => {
        const cssRules = []

        const basicCSS = createCSSString(componentStyles)
        if (basicCSS) cssRules.push(basicCSS)

        const transformCSS = createTransformString(componentStyles)
        if (transformCSS) cssRules.push(transformCSS)

        const filterCSS = createFilterString(componentStyles)
        if (filterCSS) cssRules.push(filterCSS)

        const styleString = cssRules.join("; ")

        if (styleString) {
          if (openTag.includes("style=")) {
            return openTag.replace(/style="([^"]*)"/, `style="$1; ${styleString}"`) + closeBracket
          } else {
            return openTag + ` style="${styleString}"` + closeBracket
          }
        }

        return match
      })
    }

    return content
  }, [block.content, block.editableProps])

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />
    </div>
  )
}
