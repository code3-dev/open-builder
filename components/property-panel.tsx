"use client"

import { useState } from "react"
import { X, Type, Palette, Layout, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import type { Block, TextStyles, ButtonStyles, ComponentStyles } from "@/app/page"
import { PositionControls } from "@/components/position-controls"

interface PropertyPanelProps {
  block: Block | undefined
  blocks: Block[]
  onUpdateProps: (props: any) => void
  onMoveBlock: (blockId: string, direction: "up" | "down") => void
  onMoveToPosition: (blockId: string, position: "top" | "bottom") => void
  onClose: () => void
}

const fontFamilies = [
  { value: "Inter", label: "Inter" },
  { value: "Roboto", label: "Roboto" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Lato", label: "Lato" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Poppins", label: "Poppins" },
  { value: "Playfair Display", label: "Playfair Display" },
  { value: "Merriweather", label: "Merriweather" },
  { value: "Georgia", label: "Georgia" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
]

const fontSizes = [
  { value: "10px", label: "10px" },
  { value: "12px", label: "12px" },
  { value: "14px", label: "14px" },
  { value: "16px", label: "16px" },
  { value: "18px", label: "18px" },
  { value: "20px", label: "20px" },
  { value: "24px", label: "24px" },
  { value: "28px", label: "28px" },
  { value: "32px", label: "32px" },
  { value: "36px", label: "36px" },
  { value: "48px", label: "48px" },
  { value: "64px", label: "64px" },
  { value: "72px", label: "72px" },
  { value: "96px", label: "96px" },
]

const borderStyles = [
  { value: "none", label: "None" },
  { value: "solid", label: "Solid" },
  { value: "dashed", label: "Dashed" },
  { value: "dotted", label: "Dotted" },
  { value: "double", label: "Double" },
  { value: "groove", label: "Groove" },
  { value: "ridge", label: "Ridge" },
  { value: "inset", label: "Inset" },
  { value: "outset", label: "Outset" },
]

const textDecorations = [
  { value: "none", label: "None" },
  { value: "underline", label: "Underline" },
  { value: "overline", label: "Overline" },
  { value: "line-through", label: "Line Through" },
]

const textTransforms = [
  { value: "none", label: "None" },
  { value: "uppercase", label: "UPPERCASE" },
  { value: "lowercase", label: "lowercase" },
  { value: "capitalize", label: "Capitalize" },
]

export function PropertyPanel({
  block,
  blocks,
  onUpdateProps,
  onMoveBlock,
  onMoveToPosition,
  onClose,
}: PropertyPanelProps) {
  const [activeTab, setActiveTab] = useState("content")

  if (!block) return null

  const updateTextContent = (textId: string, content: string) => {
    const currentTexts = block.editableProps?.texts || {}
    onUpdateProps({
      texts: {
        ...currentTexts,
        [textId]: {
          ...currentTexts[textId],
          content,
        },
      },
    })
  }

  const updateTextStyles = (textId: string, styles: Partial<TextStyles>) => {
    const currentTexts = block.editableProps?.texts || {}
    const currentText = currentTexts[textId] || { content: "", styles: {} }
    onUpdateProps({
      texts: {
        ...currentTexts,
        [textId]: {
          ...currentText,
          styles: { ...currentText.styles, ...styles },
        },
      },
    })
  }

  const updateButtonProps = (
    buttonId: string,
    props: { text?: string; link?: string; styles?: Partial<ButtonStyles> },
  ) => {
    const currentButtons = block.editableProps?.buttons || {}
    const currentButton = currentButtons[buttonId] || { text: "", link: "", styles: {} }
    onUpdateProps({
      buttons: {
        ...currentButtons,
        [buttonId]: {
          ...currentButton,
          ...props,
          styles: { ...currentButton.styles, ...props.styles },
        },
      },
    })
  }

  const updateComponentStyles = (styles: Partial<ComponentStyles>) => {
    const currentStyles = block.editableProps?.styles || {}
    onUpdateProps({
      styles: { ...currentStyles, ...styles },
    })
  }

  // Get editable elements based on block type
  const getEditableElements = () => {
    switch (block.type) {
      case "heroGradient":
        return {
          texts: {
            title: "Main Title",
            subtitle: "Subtitle Text",
            description: "Description Text",
          },
          buttons: {
            primary: "Primary Button",
            secondary: "Secondary Button",
          },
        }
      case "heroMinimal":
        return {
          texts: {
            title1: "First Title",
            title2: "Second Title",
            title3: "Third Title",
            description: "Description Text",
          },
          buttons: {
            primary: "Primary Button",
            secondary: "Secondary Button",
          },
        }
      case "heroImage":
        return {
          texts: {
            badge: "Badge Text",
            title: "Main Title",
            description: "Description Text",
          },
          buttons: {
            primary: "Primary Button",
            secondary: "Secondary Button",
          },
        }
      case "aboutImageText":
        return {
          texts: {
            title: "Section Title",
            description: "Main Description",
            subdescription: "Sub Description",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "aboutStats":
        return {
          texts: {
            title: "Section Title",
            description: "Description",
            stat1: "Stat 1",
            stat1label: "Stat 1 Label",
            stat2: "Stat 2",
            stat2label: "Stat 2 Label",
            stat3: "Stat 3",
            stat3label: "Stat 3 Label",
            stat4: "Stat 4",
            stat4label: "Stat 4 Label",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "aboutTeam":
        return {
          texts: {
            title: "Section Title",
            description: "Description",
            member1name: "Member 1 Name",
            member1role: "Member 1 Role",
            member1bio: "Member 1 Bio",
            member2name: "Member 2 Name",
            member2role: "Member 2 Role",
            member2bio: "Member 3 Name",
            member3name: "Member 3 Role",
            member3bio: "Member 3 Bio",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "footerSimple":
        return {
          texts: {
            brandname: "Brand Name",
            description: "Description",
            links1title: "Links 1 Title",
            links2title: "Links 2 Title",
            link1: "Link 1",
            link2: "Link 2",
            link3: "Link 3",
            link4: "Link 4",
            link5: "Link 5",
            link6: "Link 6",
            link7: "Link 7",
            copyright: "Copyright Text",
          },
          buttons: {},
        }
      case "footerNewsletter":
        return {
          texts: {
            title: "Newsletter Title",
            description: "Description",
            links1title: "Links 1 Title",
            links2title: "Links 2 Title",
            link1: "Link 1",
            link2: "Link 2",
            link3: "Link 3",
            link4: "Link 4",
            link5: "Link 5",
            link6: "Link 6",
            link7: "Link 7",
            link8: "Link 8",
            copyright: "Copyright Text",
          },
          buttons: {
            primary: "Subscribe Button",
          },
        }
      case "footerSocial":
        return {
          texts: {
            brandname: "Brand Name",
            description: "Description",
            contact1title: "Contact Title",
            email: "Email",
            phone: "Phone",
            address: "Address",
            links1title: "Links 1 Title",
            links2title: "Links 2 Title",
            link1: "Link 1",
            link2: "Link 2",
            link3: "Link 3",
            link4: "Link 4",
            link5: "Link 5",
            link6: "Link 6",
            link7: "Link 7",
            copyright: "Copyright Text",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "cardSimple":
        return {
          texts: {
            title: "Card Title",
            description: "Card Description",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "ctaSection":
        return {
          texts: {
            title: "CTA Title",
            description: "CTA Description",
            note: "Note Text",
          },
          buttons: {
            primary: "Primary Button",
            secondary: "Secondary Button",
          },
        }
      case "featureHighlight":
        return {
          texts: {
            title: "Section Title",
            description: "Section Description",
            feature1title: "Feature 1 Title",
            feature1desc: "Feature 1 Description",
            feature2title: "Feature 2 Title",
            feature2desc: "Feature 2 Description",
            feature3title: "Feature 3 Title",
            feature3desc: "Feature 3 Description",
          },
          buttons: {
            primary: "Primary Button",
          },
        }
      case "navbarModern":
        return {
          texts: {
            brand: "Brand Name",
            nav1: "Nav Item 1",
            nav2: "Nav Item 2",
            nav3: "Nav Item 3",
            nav4: "Nav Item 4",
            nav5: "Nav Item 5",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      case "navbarMinimal":
        return {
          texts: {
            brand: "Brand Name",
            nav1: "Nav Item 1",
            nav2: "Nav Item 2",
            nav3: "Nav Item 3",
            nav4: "Nav Item 4",
          },
          buttons: {
            contact: "Contact Button",
          },
        }
      case "navbarCentered":
        return {
          texts: {
            brand: "Brand Name",
            nav1: "Nav Item 1",
            nav2: "Nav Item 2",
            nav3: "Nav Item 3",
            nav4: "Nav Item 4",
            nav5: "Nav Item 5",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      case "navbarSidebar":
        return {
          texts: {
            brand: "Brand Name",
            nav1: "Nav Item 1",
            nav2: "Nav Item 2",
            nav3: "Nav Item 3",
            nav4: "Nav Item 4",
            username: "User Name",
            userrole: "User Role",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      case "testimonialCard":
        return {
          texts: {
            quote: "Testimonial Quote",
            name: "Customer Name",
            title: "Customer Title",
            company: "Company Name",
          },
          buttons: {},
        }
      case "pricingCard":
        return {
          texts: {
            planname: "Plan Name",
            price: "Price",
            description: "Plan Description",
            feature1: "Feature 1",
            feature2: "Feature 2",
            feature3: "Feature 3",
            feature4: "Feature 4",
            feature5: "Feature 5",
            note: "Note Text",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      case "contactForm":
        return {
          texts: {
            title: "Form Title",
            description: "Form Description",
          },
          buttons: {
            submit: "Submit Button",
          },
        }
      case "imageGallery":
        return {
          texts: {
            title: "Gallery Title",
            description: "Gallery Description",
          },
          buttons: {
            viewmore: "View More Button",
          },
        }
      case "videoSection":
        return {
          texts: {
            title: "Video Title",
            description: "Video Description",
            duration: "Duration",
            views: "View Count",
            date: "Date",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      case "faqSection":
        return {
          texts: {
            title: "FAQ Title",
            description: "FAQ Description",
            question1: "Question 1",
            answer1: "Answer 1",
            question2: "Question 2",
            answer2: "Answer 2",
            question3: "Question 3",
            answer3: "Answer 3",
            question4: "Question 4",
            answer4: "Answer 4",
            contacttext: "Contact Text",
          },
          buttons: {
            contact: "Contact Button",
          },
        }
      case "blogCard":
        return {
          texts: {
            category: "Category",
            date: "Date",
            title: "Blog Title",
            excerpt: "Blog Excerpt",
            author: "Author Name",
            readtime: "Read Time",
          },
          buttons: {
            readmore: "Read More Button",
          },
        }
      case "statsCounter":
        return {
          texts: {
            title: "Stats Title",
            description: "Stats Description",
            stat1: "Stat 1",
            stat1label: "Stat 1 Label",
            stat2: "Stat 2",
            stat2label: "Stat 2 Label",
            stat3: "Stat 3",
            stat3label: "Stat 3 Label",
            stat4: "Stat 4",
            stat4label: "Stat 4 Label",
          },
          buttons: {
            cta: "CTA Button",
          },
        }
      default:
        return { texts: {}, buttons: {} }
    }
  }

  const editableElements = getEditableElements()

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 shadow-lg z-50 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Properties</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">
              <Type className="w-4 h-4 mr-1" />
              Content
            </TabsTrigger>
            <TabsTrigger value="style">
              <Palette className="w-4 h-4 mr-1" />
              Style
            </TabsTrigger>
            <TabsTrigger value="layout">
              <Layout className="w-4 h-4 mr-1" />
              Layout
            </TabsTrigger>
            <TabsTrigger value="effects">
              <Zap className="w-4 h-4 mr-1" />
              Effects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4 mt-4">
            {/* Text Content Editing */}
            {Object.entries(editableElements.texts).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Text Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(editableElements.texts).map(([textId, label]) => {
                    const currentText = block.editableProps?.texts?.[textId]
                    return (
                      <div key={textId}>
                        <Label className="text-xs font-medium text-gray-600">{label}</Label>
                        <Input
                          value={currentText?.content || ""}
                          onChange={(e) => updateTextContent(textId, e.target.value)}
                          placeholder={`Enter ${label.toLowerCase()}`}
                          className="mt-1"
                        />
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )}

            {/* Button Content Editing */}
            {Object.entries(editableElements.buttons).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Buttons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(editableElements.buttons).map(([buttonId, label]) => {
                    const currentButton = block.editableProps?.buttons?.[buttonId]
                    return (
                      <div key={buttonId} className="space-y-2">
                        <Label className="text-xs font-medium text-gray-600">{label}</Label>
                        <Input
                          value={currentButton?.text || ""}
                          onChange={(e) => updateButtonProps(buttonId, { text: e.target.value })}
                          placeholder="Button text"
                        />
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">🔗</span>
                          <Input
                            value={currentButton?.link || ""}
                            onChange={(e) => updateButtonProps(buttonId, { link: e.target.value })}
                            placeholder="https://example.com"
                            className="flex-1"
                          />
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="style" className="space-y-4 mt-4">
            {/* Advanced Text Styling */}
            {Object.entries(editableElements.texts).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Typography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(editableElements.texts).map(([textId, label]) => {
                    const currentStyles = block.editableProps?.texts?.[textId]?.styles || {}
                    return (
                      <div key={textId} className="space-y-4">
                        <Label className="text-sm font-semibold text-gray-800">{label}</Label>

                        {/* Font Family & Size */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="text-xs text-gray-600">Font Family</Label>
                            <Select
                              value={currentStyles.fontFamily || "Inter"}
                              onValueChange={(value) => updateTextStyles(textId, { fontFamily: value })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {fontFamilies.map((font) => (
                                  <SelectItem key={font.value} value={font.value}>
                                    {font.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-xs text-gray-600">Font Size</Label>
                            <Select
                              value={currentStyles.fontSize || "16px"}
                              onValueChange={(value) => updateTextStyles(textId, { fontSize: value })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {fontSizes.map((size) => (
                                  <SelectItem key={size.value} value={size.value}>
                                    {size.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Font Weight & Style */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="text-xs text-gray-600">Font Weight</Label>
                            <Select
                              value={currentStyles.fontWeight || "400"}
                              onValueChange={(value) => updateTextStyles(textId, { fontWeight: value })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="100">Thin (100)</SelectItem>
                                <SelectItem value="200">Extra Light (200)</SelectItem>
                                <SelectItem value="300">Light (300)</SelectItem>
                                <SelectItem value="400">Normal (400)</SelectItem>
                                <SelectItem value="500">Medium (500)</SelectItem>
                                <SelectItem value="600">Semibold (600)</SelectItem>
                                <SelectItem value="700">Bold (700)</SelectItem>
                                <SelectItem value="800">Extra Bold (800)</SelectItem>
                                <SelectItem value="900">Black (900)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-xs text-gray-600">Font Style</Label>
                            <Select
                              value={currentStyles.fontStyle || "normal"}
                              onValueChange={(value) => updateTextStyles(textId, { fontStyle: value })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="normal">Normal</SelectItem>
                                <SelectItem value="italic">Italic</SelectItem>
                                <SelectItem value="oblique">Oblique</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Text Color */}
                        <div>
                          <Label className="text-xs text-gray-600">Text Color</Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <input
                              type="color"
                              value={currentStyles.color || "#000000"}
                              onChange={(e) => updateTextStyles(textId, { color: e.target.value })}
                              className="w-10 h-8 rounded border border-gray-300 cursor-pointer"
                            />
                            <Input
                              value={currentStyles.color || "#000000"}
                              onChange={(e) => updateTextStyles(textId, { color: e.target.value })}
                              placeholder="#000000"
                              className="flex-1 h-8"
                            />
                          </div>
                        </div>

                        {/* Text Alignment */}
                        <div>
                          <Label className="text-xs text-gray-600">Text Align</Label>
                          <Select
                            value={currentStyles.textAlign || "left"}
                            onValueChange={(value) => updateTextStyles(textId, { textAlign: value })}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="left">Left</SelectItem>
                              <SelectItem value="center">Center</SelectItem>
                              <SelectItem value="right">Right</SelectItem>
                              <SelectItem value="justify">Justify</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Line Height */}
                        <div>
                          <Label className="text-xs text-gray-600">Line Height</Label>
                          <div className="flex items-center space-x-3 mt-2">
                            <Slider
                              value={[Number.parseFloat(currentStyles.lineHeight || "1.5")]}
                              onValueChange={([value]) => updateTextStyles(textId, { lineHeight: value.toString() })}
                              max={3}
                              min={0.8}
                              step={0.1}
                              className="flex-1"
                            />
                            <span className="text-xs text-gray-500 w-8">{currentStyles.lineHeight || "1.5"}</span>
                          </div>
                        </div>

                        {/* Letter Spacing */}
                        <div>
                          <Label className="text-xs text-gray-600">Letter Spacing</Label>
                          <div className="flex items-center space-x-3 mt-2">
                            <Slider
                              value={[Number.parseFloat(currentStyles.letterSpacing || "0")]}
                              onValueChange={([value]) => updateTextStyles(textId, { letterSpacing: `${value}px` })}
                              max={10}
                              min={-2}
                              step={0.1}
                              className="flex-1"
                            />
                            <span className="text-xs text-gray-500 w-12">{currentStyles.letterSpacing || "0px"}</span>
                          </div>
                        </div>

                        {/* Text Decoration */}
                        <div>
                          <Label className="text-xs text-gray-600">Text Decoration</Label>
                          <Select
                            value={currentStyles.textDecoration || "none"}
                            onValueChange={(value) => updateTextStyles(textId, { textDecoration: value })}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {textDecorations.map((decoration) => (
                                <SelectItem key={decoration.value} value={decoration.value}>
                                  {decoration.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Text Transform */}
                        <div>
                          <Label className="text-xs text-gray-600">Text Transform</Label>
                          <Select
                            value={currentStyles.textTransform || "none"}
                            onValueChange={(value) => updateTextStyles(textId, { textTransform: value })}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {textTransforms.map((transform) => (
                                <SelectItem key={transform.value} value={transform.value}>
                                  {transform.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <Separator />
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )}

            {/* Advanced Button Styling */}
            {Object.entries(editableElements.buttons).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Button Styling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(editableElements.buttons).map(([buttonId, label]) => {
                    const currentStyles = block.editableProps?.buttons?.[buttonId]?.styles || {}
                    return (
                      <div key={buttonId} className="space-y-4">
                        <Label className="text-sm font-semibold text-gray-800">{label}</Label>

                        {/* Background & Text Colors */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="text-xs text-gray-600">Background</Label>
                            <div className="flex items-center space-x-2 mt-1">
                              <input
                                type="color"
                                value={currentStyles.backgroundColor || "#3b82f6"}
                                onChange={(e) =>
                                  updateButtonProps(buttonId, { styles: { backgroundColor: e.target.value } })
                                }
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                              />
                              <Input
                                value={currentStyles.backgroundColor || "#3b82f6"}
                                onChange={(e) =>
                                  updateButtonProps(buttonId, { styles: { backgroundColor: e.target.value } })
                                }
                                className="flex-1 h-8"
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="text-xs text-gray-600">Text Color</Label>
                            <div className="flex items-center space-x-2 mt-1">
                              <input
                                type="color"
                                value={currentStyles.textColor || "#ffffff"}
                                onChange={(e) => updateButtonProps(buttonId, { styles: { textColor: e.target.value } })}
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                              />
                              <Input
                                value={currentStyles.textColor || "#ffffff"}
                                onChange={(e) => updateButtonProps(buttonId, { styles: { textColor: e.target.value } })}
                                className="flex-1 h-8"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Font Size & Weight */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="text-xs text-gray-600">Font Size</Label>
                            <Select
                              value={currentStyles.fontSize || "16px"}
                              onValueChange={(value) => updateButtonProps(buttonId, { styles: { fontSize: value } })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {fontSizes.map((size) => (
                                  <SelectItem key={size.value} value={size.value}>
                                    {size.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-xs text-gray-600">Font Weight</Label>
                            <Select
                              value={currentStyles.fontWeight || "500"}
                              onValueChange={(value) => updateButtonProps(buttonId, { styles: { fontWeight: value } })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="300">Light (300)</SelectItem>
                                <SelectItem value="400">Normal (400)</SelectItem>
                                <SelectItem value="500">Medium (500)</SelectItem>
                                <SelectItem value="600">Semibold (600)</SelectItem>
                                <SelectItem value="700">Bold (700)</SelectItem>
                                <SelectItem value="800">Extra Bold (800)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Padding */}
                        <div>
                          <Label className="text-xs text-gray-600">Padding</Label>
                          <div className="grid grid-cols-2 gap-2 mt-1">
                            <Input
                              placeholder="Vertical (e.g., 12px)"
                              value={currentStyles.paddingY || ""}
                              onChange={(e) => updateButtonProps(buttonId, { styles: { paddingY: e.target.value } })}
                              className="h-8"
                            />
                            <Input
                              placeholder="Horizontal (e.g., 24px)"
                              value={currentStyles.paddingX || ""}
                              onChange={(e) => updateButtonProps(buttonId, { styles: { paddingX: e.target.value } })}
                              className="h-8"
                            />
                          </div>
                        </div>

                        {/* Border */}
                        <div className="space-y-2">
                          <Label className="text-xs text-gray-600">Border</Label>
                          <div className="grid grid-cols-3 gap-2">
                            <Input
                              placeholder="Width (e.g., 2px)"
                              value={currentStyles.borderWidth || ""}
                              onChange={(e) => updateButtonProps(buttonId, { styles: { borderWidth: e.target.value } })}
                              className="h-8"
                            />
                            <Select
                              value={currentStyles.borderStyle || "solid"}
                              onValueChange={(value) => updateButtonProps(buttonId, { styles: { borderStyle: value } })}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {borderStyles.map((style) => (
                                  <SelectItem key={style.value} value={style.value}>
                                    {style.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <div className="flex items-center space-x-1">
                              <input
                                type="color"
                                value={currentStyles.borderColor || "#000000"}
                                onChange={(e) =>
                                  updateButtonProps(buttonId, { styles: { borderColor: e.target.value } })
                                }
                                className="w-6 h-6 rounded border border-gray-300 cursor-pointer"
                              />
                              <Input
                                value={currentStyles.borderColor || "#000000"}
                                onChange={(e) =>
                                  updateButtonProps(buttonId, { styles: { borderColor: e.target.value } })
                                }
                                className="flex-1 h-8"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Border Radius */}
                        <div>
                          <Label className="text-xs text-gray-600">Border Radius</Label>
                          <Select
                            value={currentStyles.borderRadius || "8px"}
                            onValueChange={(value) => updateButtonProps(buttonId, { styles: { borderRadius: value } })}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0px">None (0px)</SelectItem>
                              <SelectItem value="2px">Small (2px)</SelectItem>
                              <SelectItem value="4px">Small+ (4px)</SelectItem>
                              <SelectItem value="6px">Medium- (6px)</SelectItem>
                              <SelectItem value="8px">Medium (8px)</SelectItem>
                              <SelectItem value="12px">Large (12px)</SelectItem>
                              <SelectItem value="16px">Large+ (16px)</SelectItem>
                              <SelectItem value="24px">XL (24px)</SelectItem>
                              <SelectItem value="9999px">Full (9999px)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Separator />
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="layout" className="space-y-4 mt-4">
            <PositionControls
              block={block}
              blocks={blocks}
              onMoveBlock={onMoveBlock}
              onMoveToPosition={onMoveToPosition}
            />

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Component Layout</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Background */}
                <div>
                  <Label className="text-xs text-gray-600">Background Color</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <input
                      type="color"
                      value={block.editableProps?.styles?.backgroundColor || "#ffffff"}
                      onChange={(e) => updateComponentStyles({ backgroundColor: e.target.value })}
                      className="w-10 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <Input
                      value={block.editableProps?.styles?.backgroundColor || "#ffffff"}
                      onChange={(e) => updateComponentStyles({ backgroundColor: e.target.value })}
                      placeholder="#ffffff"
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-600">Width</Label>
                    <Input
                      value={block.editableProps?.styles?.width || ""}
                      onChange={(e) => updateComponentStyles({ width: e.target.value })}
                      placeholder="auto, 100%, 500px"
                      className="h-8"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-600">Height</Label>
                    <Input
                      value={block.editableProps?.styles?.height || ""}
                      onChange={(e) => updateComponentStyles({ height: e.target.value })}
                      placeholder="auto, 100vh, 400px"
                      className="h-8"
                    />
                  </div>
                </div>

                {/* Padding */}
                <div>
                  <Label className="text-xs text-gray-600">Padding</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="grid grid-cols-2 gap-1">
                      <Input
                        placeholder="Top"
                        value={block.editableProps?.styles?.paddingTop || ""}
                        onChange={(e) => updateComponentStyles({ paddingTop: e.target.value })}
                        className="h-8 text-xs"
                      />
                      <Input
                        placeholder="Right"
                        value={block.editableProps?.styles?.paddingRight || ""}
                        onChange={(e) => updateComponentStyles({ paddingRight: e.target.value })}
                        className="h-8 text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <Input
                        placeholder="Bottom"
                        value={block.editableProps?.styles?.paddingBottom || ""}
                        onChange={(e) => updateComponentStyles({ paddingBottom: e.target.value })}
                        className="h-8 text-xs"
                      />
                      <Input
                        placeholder="Left"
                        value={block.editableProps?.styles?.paddingLeft || ""}
                        onChange={(e) => updateComponentStyles({ paddingLeft: e.target.value })}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Input
                      placeholder="All sides (e.g., 24px)"
                      value={block.editableProps?.styles?.padding || ""}
                      onChange={(e) => updateComponentStyles({ padding: e.target.value })}
                      className="h-8"
                    />
                  </div>
                </div>

                {/* Margin */}
                <div>
                  <Label className="text-xs text-gray-600">Margin</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="grid grid-cols-2 gap-1">
                      <Input
                        placeholder="Top"
                        value={block.editableProps?.styles?.marginTop || ""}
                        onChange={(e) => updateComponentStyles({ marginTop: e.target.value })}
                        className="h-8 text-xs"
                      />
                      <Input
                        placeholder="Right"
                        value={block.editableProps?.styles?.marginRight || ""}
                        onChange={(e) => updateComponentStyles({ marginRight: e.target.value })}
                        className="h-8 text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <Input
                        placeholder="Bottom"
                        value={block.editableProps?.styles?.marginBottom || ""}
                        onChange={(e) => updateComponentStyles({ marginBottom: e.target.value })}
                        className="h-8 text-xs"
                      />
                      <Input
                        placeholder="Left"
                        value={block.editableProps?.styles?.marginLeft || ""}
                        onChange={(e) => updateComponentStyles({ marginLeft: e.target.value })}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Input
                      placeholder="All sides (e.g., 0px auto)"
                      value={block.editableProps?.styles?.margin || ""}
                      onChange={(e) => updateComponentStyles({ margin: e.target.value })}
                      className="h-8"
                    />
                  </div>
                </div>

                {/* Display & Position */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-600">Display</Label>
                    <Select
                      value={block.editableProps?.styles?.display || "block"}
                      onValueChange={(value) => updateComponentStyles({ display: value })}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="block">Block</SelectItem>
                        <SelectItem value="inline">Inline</SelectItem>
                        <SelectItem value="inline-block">Inline Block</SelectItem>
                        <SelectItem value="flex">Flex</SelectItem>
                        <SelectItem value="inline-flex">Inline Flex</SelectItem>
                        <SelectItem value="grid">Grid</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-600">Position</Label>
                    <Select
                      value={block.editableProps?.styles?.position || "static"}
                      onValueChange={(value) => updateComponentStyles({ position: value })}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="static">Static</SelectItem>
                        <SelectItem value="relative">Relative</SelectItem>
                        <SelectItem value="absolute">Absolute</SelectItem>
                        <SelectItem value="fixed">Fixed</SelectItem>
                        <SelectItem value="sticky">Sticky</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Z-Index */}
                <div>
                  <Label className="text-xs text-gray-600">Z-Index</Label>
                  <Input
                    value={block.editableProps?.styles?.zIndex || ""}
                    onChange={(e) => updateComponentStyles({ zIndex: e.target.value })}
                    placeholder="0, 10, 999"
                    className="h-8"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="effects" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Visual Effects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Opacity */}
                <div>
                  <Label className="text-xs text-gray-600">Opacity</Label>
                  <div className="flex items-center space-x-3 mt-2">
                    <Slider
                      value={[Number.parseFloat(block.editableProps?.styles?.opacity || "1")]}
                      onValueChange={([value]) => updateComponentStyles({ opacity: value.toString() })}
                      max={1}
                      min={0}
                      step={0.1}
                      className="flex-1"
                    />
                    <span className="text-xs text-gray-500 w-8">
                      {Math.round(Number.parseFloat(block.editableProps?.styles?.opacity || "1") * 100)}%
                    </span>
                  </div>
                </div>

                {/* Box Shadow */}
                <div>
                  <Label className="text-xs text-gray-600">Box Shadow</Label>
                  <div className="space-y-2 mt-1">
                    <Select
                      value={block.editableProps?.styles?.boxShadow || "none"}
                      onValueChange={(value) => updateComponentStyles({ boxShadow: value })}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="0 1px 3px rgba(0,0,0,0.12)">Small</SelectItem>
                        <SelectItem value="0 4px 6px rgba(0,0,0,0.1)">Medium</SelectItem>
                        <SelectItem value="0 10px 15px rgba(0,0,0,0.1)">Large</SelectItem>
                        <SelectItem value="0 20px 25px rgba(0,0,0,0.15)">Extra Large</SelectItem>
                        <SelectItem value="0 0 0 1px rgba(0,0,0,0.05)">Outline</SelectItem>
                        <SelectItem value="inset 0 2px 4px rgba(0,0,0,0.06)">Inner</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Custom shadow (e.g., 0 4px 8px rgba(0,0,0,0.1))"
                      value={block.editableProps?.styles?.customBoxShadow || ""}
                      onChange={(e) => updateComponentStyles({ boxShadow: e.target.value })}
                      className="h-8"
                    />
                  </div>
                </div>

                {/* Transform */}
                <div>
                  <Label className="text-xs text-gray-600">Transform</Label>
                  <div className="space-y-2 mt-1">
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Rotate (e.g., 45deg)"
                        value={block.editableProps?.styles?.rotate || ""}
                        onChange={(e) => updateComponentStyles({ rotate: e.target.value })}
                        className="h-8"
                      />
                      <Input
                        placeholder="Scale (e.g., 1.1)"
                        value={block.editableProps?.styles?.scale || ""}
                        onChange={(e) => updateComponentStyles({ scale: e.target.value })}
                        className="h-8"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Translate X (e.g., 10px)"
                        value={block.editableProps?.styles?.translateX || ""}
                        onChange={(e) => updateComponentStyles({ translateX: e.target.value })}
                        className="h-8"
                      />
                      <Input
                        placeholder="Translate Y (e.g., -5px)"
                        value={block.editableProps?.styles?.translateY || ""}
                        onChange={(e) => updateComponentStyles({ translateY: e.target.value })}
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <Label className="text-xs text-gray-600">Filters</Label>
                  <div className="space-y-2 mt-1">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs text-gray-500">Blur</Label>
                        <div className="flex items-center space-x-2">
                          <Slider
                            value={[Number.parseFloat(block.editableProps?.styles?.blur || "0")]}
                            onChange={([value]) => updateComponentStyles({ blur: `${value}px` })}
                            max={20}
                            min={0}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-xs text-gray-500 w-8">
                            {block.editableProps?.styles?.blur || "0px"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-500">Brightness</Label>
                        <div className="flex items-center space-x-2">
                          <Slider
                            value={[Number.parseFloat(block.editableProps?.styles?.brightness || "1")]}
                            onChange={([value]) => updateComponentStyles({ brightness: value.toString() })}
                            max={2}
                            min={0}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-xs text-gray-500 w-8">
                            {block.editableProps?.styles?.brightness || "1"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs text-gray-500">Contrast</Label>
                        <div className="flex items-center space-x-2">
                          <Slider
                            value={[Number.parseFloat(block.editableProps?.styles?.contrast || "1")]}
                            onChange={([value]) => updateComponentStyles({ contrast: value.toString() })}
                            max={2}
                            min={0}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-xs text-gray-500 w-8">
                            {block.editableProps?.styles?.contrast || "1"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-500">Saturate</Label>
                        <div className="flex items-center space-x-2">
                          <Slider
                            value={[Number.parseFloat(block.editableProps?.styles?.saturate || "1")]}
                            onChange={([value]) => updateComponentStyles({ saturate: value.toString() })}
                            max={2}
                            min={0}
                            step={0.1}
                            className="flex-1"
                          />
                          <span className="text-xs text-gray-500 w-8">
                            {block.editableProps?.styles?.saturate || "1"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transition */}
                <div>
                  <Label className="text-xs text-gray-600">Transition</Label>
                  <div className="space-y-2 mt-1">
                    <Select
                      value={block.editableProps?.styles?.transition || "none"}
                      onChange={(value) => updateComponentStyles({ transition: value })}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="all 0.2s ease">Fast (0.2s)</SelectItem>
                        <SelectItem value="all 0.3s ease">Normal (0.3s)</SelectItem>
                        <SelectItem value="all 0.5s ease">Slow (0.5s)</SelectItem>
                        <SelectItem value="all 0.3s ease-in">Ease In</SelectItem>
                        <SelectItem value="all 0.3s ease-out">Ease Out</SelectItem>
                        <SelectItem value="all 0.3s ease-in-out">Ease In Out</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Custom transition (e.g., opacity 0.3s ease)"
                      value={block.editableProps?.styles?.customTransition || ""}
                      onChange={(e) => updateComponentStyles({ transition: e.target.value })}
                      className="h-8"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
